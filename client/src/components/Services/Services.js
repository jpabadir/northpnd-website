import React, { useState } from 'react';
import './Services.css';
import { Row, Col, Container } from 'react-bootstrap';
import coding from '../../assets/coding.mp4';
import cables from '../../assets/cables.mp4';
import discussion from '../../assets/discussion.mp4';

function ServicesCard(props) {
  return (
    <Col className="ServicesCardCol" lg={4}>
      <div className="ServicesVideoGrandParent">
        <div className="ServicesVideoParent StaticShadow">
          <video
            className="ServicesVideo"
            src={props.src}
            height="250"
            type="video/mp4"
            onMouseOver={(event) => {
              props.setSubtitleDisplay(props.index);
              event.target.play();
            }}
            onMouseOut={(event) => {
              props.setSubtitleDisplay(-1);
              event.target.pause();
              event.target.currentTime = 0;
            }}
            loop
            muted
          />
        </div>
        <div className="CardTitle" style={{ fontSize: '17px' }}>
          {props.title}
        </div>
        <div style={{ fontSize: '15px', opacity: `${props.subtitleDisplay === props.index ? '0.7' : '0'}`, transition: '0.3s' }}>
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
            src={coding}
            title="Web &amp; Mobile Development"
            subtitle="Do you have a technical team? We can assist with development in your tech stack of choice on a feature-by-feature basis."
            subtitleDisplay={subtitleDisplay}
            setSubtitleDisplay={setSubtitleDisplay}
          />
          <ServicesCard
            index={1}
            src={cables}
            title="Hosting"
            subtitle="We'll deal with your hosting and domain name needs so you only have one tech bill to pay - ours."
            subtitleDisplay={subtitleDisplay}
            setSubtitleDisplay={setSubtitleDisplay}
          />
          <ServicesCard
            index={2}
            src={discussion}
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
