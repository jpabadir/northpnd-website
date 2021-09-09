import React, { useState, useLayoutEffect } from 'react';
import './Services.css';
import { Row, Col, Container } from 'react-bootstrap';
import coding from '../../assets/coding-light.mov';
import cables from '../../assets/cables-light.mov';
import discussion from '../../assets/discussion-light.mov';
import codingPoster from '../../assets/coding-poster.png';
import cablesPoster from '../../assets/cables-poster.png';
import discussionPoster from '../../assets/discussion-poster.png';
import Fade from 'react-reveal/Fade';

function ServicesCard(props) {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    function updateIsMobile() {
      setIsMobile(document.documentElement.clientWidth < 992);
    }
    window.addEventListener('resize', updateIsMobile);
    updateIsMobile();
    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  return (
    <Col className="ServicesCardCol" lg={4}>
      <div className="ServicesVideoGrandParent">
        <div className={`ServicesVideoParent StaticShadow ${isMobile ? '' : 'VideoTransition'}`}>
          <video
            className="ServicesVideo"
            src={props.videoSrc}
            height="250"
            type="video/mov"
            onMouseOver={() => {
              if (!isMobile) props.setSubtitleDisplay(props.index);
            }}
            onMouseOut={() => {
              if (!isMobile) props.setSubtitleDisplay(-1);
            }}
            playsInline
            loop
            autoPlay
            muted
            poster={props.poster}
          />
        </div>
        <div className="CardTitle ServicesCardTitle" style={{ fontSize: '17px', paddingTop: '15px' }}>
          {props.title}
        </div>
        <div
          style={{
            fontSize: '15px',
            opacity: `${props.subtitleDisplay === props.index || isMobile || true ? '0.7' : '0'}`,
            transition: '0.3s',
          }}
        >
          {props.subtitle}
        </div>
      </div>
    </Col>
  );
}

function Services() {
  const [subtitleDisplay, setSubtitleDisplay] = useState(-1);

  return (
    <div className="ServicesPadding">
      <Container fluid>
        <div className="TextBlock">
          <div className="Subtitle">How we can help you</div>
          <Fade duration="1200">
            <div style={{ fontSize: '25px' }}>We're not (just) a web dev company.</div>
            <div style={{ fontSize: '20px' }}>We take care of your technology needs so you can focus on your business.</div>
          </Fade>
        </div>
        <Fade duration="1200">
          <Row className="ServicesCardsRow">
            <ServicesCard
              index={0}
              videoSrc={coding}
              posterSrc={codingPoster}
              title="Web &amp; Mobile Development"
              subtitle="We'll work with you to design, develop, and deploy your website or app."
              subtitleDisplay={subtitleDisplay}
              setSubtitleDisplay={setSubtitleDisplay}
            />
            <ServicesCard
              index={1}
              videoSrc={cables}
              posterSrc={cablesPoster}
              title="Hosting"
              subtitle="We'll deal with your hosting and domain name so you only have one tech bill to pay - ours."
              subtitleDisplay={subtitleDisplay}
              setSubtitleDisplay={setSubtitleDisplay}
            />
            <ServicesCard
              index={2}
              videoSrc={discussion}
              posterSrc={discussionPoster}
              title="Custom Solution"
              subtitle="Do you have a unique business problem that can be solved with tech? Do you need a consultant to speed up development? We can help."
              subtitleDisplay={subtitleDisplay}
              setSubtitleDisplay={setSubtitleDisplay}
            />
          </Row>
        </Fade>
      </Container>
    </div>
  );
}

export default Services;
