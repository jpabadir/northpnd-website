import "./Main.css";
import { Element, scroller } from "react-scroll";
import { useEffect, useRef, useState } from "react";
import About from "../About/About";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import OurClients from "../OurClients/OurClients";
import FAQ from "../Faq/Faq";
import "../../hamburgers.css";
import Fade from "react-reveal/Fade";
import homeBackground from "../../assets/home-background.mp4";

const bodyScrollLock = require("body-scroll-lock");
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

function Main(props) {
  const refContainer = useRef(null);
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  useEffect(() => {
    if (isToggleOpen) disableBodyScroll(refContainer.current);
    else enableBodyScroll(refContainer.current);
  }, [isToggleOpen]);

  useEffect(() => {
    scroller.scrollTo(props.scrollGoal, {
      duration: 300,
      smooth: true,
      spy: true,
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
          />
          <div className="Overlay DarkOverlay" />
          <Fade duration={1200}>
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
          </Fade>
          <div className="FirstSeparator" />
          <div
            style={{ width: "100%", justifyContent: "center", display: "flex" }}
          >
            <Element name="about" className="element" style={{ width: "100%" }}>
              <About />
            </Element>
          </div>
          <div
            style={{ width: "100%", justifyContent: "center", display: "flex" }}
          >
            <Element
              name="ourclients"
              className="element"
              style={{ width: "100%" }}
            >
              <OurClients />
            </Element>
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
            <div
              style={{
                width: "100%",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Element
                name="FAQ"
                className="element"
                style={{ width: "100%" }}
              >
                <FAQ />
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
                  name="contactus"
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
    </div>
  );
}

export default Main;
