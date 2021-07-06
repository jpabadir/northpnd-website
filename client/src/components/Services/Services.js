import React, { useState, useLayoutEffect } from 'react';
import './Services.css';
import { Row, Col, Container } from 'react-bootstrap';
import coding from '../../assets/coding-light.mov';
import cables from '../../assets/cables-light.mov';
import discussion from '../../assets/discussion-light.mov';
import codingPoster from '../../assets/coding-poster.png';
import cablesPoster from '../../assets/cables-poster.png';
import discussionPoster from '../../assets/discussion-poster.png';

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
            onMouseOver={(event) => {
              if (isMobile) return;
              props.setSubtitleDisplay(props.index);
              event.target.play();
            }}
            onMouseOut={(event) => {
              if (isMobile) return;
              props.setSubtitleDisplay(-1);
              event.target.pause();
              event.target.currentTime = 0;
            }}
            playsInline
            loop
            muted
            poster={props.poster}
          />
        </div>
        <div className="CardTitle" style={{ fontSize: '17px', paddingTop: '15px' }}>
          {props.title}
        </div>
        <div
          style={{ fontSize: '15px', opacity: `${props.subtitleDisplay === props.index || isMobile ? '0.7' : '0'}`, transition: '0.3s' }}
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
    <div className="MainElementPadding ServicesMain">
      <Container fluid>
        <div className="TextBlock">
          <div className="Subtitle">How we can help you</div>
          <div style={{ fontSize: '25px' }}>We're not (just) a web dev company.</div>
          <div style={{ fontSize: '20px' }}>We take care of your technology needs so you can focus on your business.</div>
        </div>
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
            subtitle="Do you have a unique business problem that can be solved with tech? We can help."
            subtitleDisplay={subtitleDisplay}
            setSubtitleDisplay={setSubtitleDisplay}
          />
        </Row>
      </Container>
    </div>
  );
}

export default Services;
