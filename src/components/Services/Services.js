import React, { useState, useLayoutEffect } from 'react';
import './Services.css';
import { Row, Col, Container } from 'react-bootstrap';
import coding from '../../assets/coding-light.mov';
import discussion from '../../assets/discussion-light.mov';
import codingPoster from '../../assets/coding-poster.png';
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
    <div className="MainElementPadding">
      <Container fluid>
        <div className="Subtitle">How we can help you</div>
        <div style={{ fontSize: '25px' }}>There are two types of clients we work with.</div>
        <Row className="ServicesCardsRow">
          <ServicesCard
            index={1}
            videoSrc={coding}
            posterSrc={codingPoster}
            title="Technical teams"
            subtitle="We provide staff augmentation services to our technical clients. We function as an integral part of their team, working closely with their developers, prioritizing collaboration, communication and code quality. We pride ourselves in working with a deep sense of owernship towards the outcome of the tech we build and strive to create maintainable, robust, and scalable solutions that exceed expectations."
            subtitleDisplay={subtitleDisplay}
            setSubtitleDisplay={setSubtitleDisplay}
          />
          <ServicesCard
            index={2}
            videoSrc={discussion}
            posterSrc={discussionPoster}
            title="Non-technical businesses"
            subtitle="We help our clients design, develop and maintain digital products. We work with them to understand their business and their users, and help them build solutions that are not only functional but also highly enjoyable to use."
            subtitleDisplay={subtitleDisplay}
            setSubtitleDisplay={setSubtitleDisplay}
          />
        </Row>
      </Container >
    </div >
  );
}

export default Services;
