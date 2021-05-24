import React, { useState } from 'react';
import './Services.css';
import { Card } from 'antd';
import { Form, Button, Row, Col } from 'react-bootstrap';
import coding from '../../assets/coding.svg';
import feature from '../../assets/feature.svg';
import userInterface from '../../assets/user-interface.svg';
import information from '../../assets/information.svg';
import upload from '../../assets/upload.svg';
import analysis from '../../assets/analysis.svg';
import ReactCardFlip from 'react-card-flip';

function Services() {
  const [isFirstFlipped, setIsFirstFlipped] = useState(false);
  const [isSecondFlipped, setIsSecondFlipped] = useState(false);
  const [isThirdFlipped, setIsThirdFlipped] = useState(false);

  const flip = (index) => {
    switch (index) {
      case 0:
        setIsFirstFlipped(!isFirstFlipped);
        setIsSecondFlipped(false);
        setIsThirdFlipped(false);
        break;
      case 1:
        setIsSecondFlipped(!isSecondFlipped);
        setIsFirstFlipped(false);
        setIsThirdFlipped(false);
        break;
      case 2:
        setIsThirdFlipped(!isThirdFlipped);
        setIsFirstFlipped(false);
        setIsSecondFlipped(false);
        break;
      default:
        console.log('Something weird happened.');
    }
  };

  return (
    <div className="ServicesMain">
      <div className="Subtitle">How we can help you</div>
      <div className="Subtitle" style={{ fontSize: '25px' }}>
        We're not (just) a web dev company.
      </div>
      <div style={{ fontSize: '20px' }}>We take care of your technical needs so you can focus on your business.</div>
      <Row className="ServicesCardsRow">
        <Col className="ServicesCardCol">
          <ReactCardFlip isFlipped={isFirstFlipped} flipDirection="horizontal">
            <Card className="MyCard" cover={<img alt="example" src={analysis} height="80" />} onClick={() => flip(0)}>
              <h5>Web and Mobile Development</h5>
              <p>We'll build you a stunning, modern website or mobile app.</p>
            </Card>
            <Card className="MyCard" cover={<img alt="example" src={information} height="80" />} onClick={() => flip(0)}>
              Do you have a technical team? We can assist with development in your tech stack of choice on a feature-by-feature basis.
            </Card>
          </ReactCardFlip>
        </Col>
        <Col className="ServicesCardCol">
          <ReactCardFlip isFlipped={isSecondFlipped} flipDirection="horizontal">
            <Card className="MyCard" cover={<img alt="example" src={upload} height="80" />} onClick={() => flip(1)}>
              <h5>Hosting</h5>
              <p>We'll deal with your hosting needs so you only have one tech bill to pay - ours.</p>
            </Card>
            <Card className="MyCard" cover={<img alt="example" src={information} height="80" />} onClick={() => flip(1)}>
              Already have a hosting solution? No problem, we'll deliver the application's code and let you handle the rest.
            </Card>
          </ReactCardFlip>
        </Col>
        <Col className="ServicesCardCol">
          <ReactCardFlip isFlipped={isThirdFlipped} flipDirection="horizontal">
            <Card className="MyCard" cover={<img alt="example" src={feature} height="80" />} onClick={() => flip(2)}>
              <h5>Custom Solution</h5>
              <p>Do you have a unique business problem that can be solved with tech? We can help.</p>
            </Card>

            <Card className="MyCard" onClick={() => flip(2)} cover={<img alt="example" src={information} height="80" />}>
              For instance, if you manage a retail store, we can help you connect your point of sale system to your existing technical
              solution to streamline your process.
            </Card>
          </ReactCardFlip>
        </Col>
      </Row>
    </div>
  );
}

export default Services;
