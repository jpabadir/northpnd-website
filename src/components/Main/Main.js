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
import homeBackground from "../../assets/home-background.mp4";
import homeBackgroundPoster from '../../assets/home-background-poster.jpg';

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

  const videoRef = useRef(null);
  const [isLPM, setIsLPM] = useState(true);
  // If the video successfully plays, it's not on low power mode
  useEffect(() => videoRef.current.play().then(() => {setIsLPM(false)}), []);

  return (
    <div>
      <div>
        <div
          onClick={closeToggle}
          style={{ position: "relative", width: "100%" }}
        >
          {isLPM && <img className="BackgroundVideo Overlay" src={homeBackgroundPoster} />}
          <video
            ref={videoRef}
            src={homeBackground}
            className="BackgroundVideo Overlay"
            type="video/mov"
            playsInline
            loop
            autoPlay
            muted
            style={isLPM ? {display: "none"} : undefined}
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
          <div
            style={{ width: "100%", justifyContent: "center", display: "flex" }}
          >
            <Element name="TeamSection" className="element" style={{ width: "100%" }}>
              <TeamSection />
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
});

export default Main;
