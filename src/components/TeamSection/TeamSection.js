import React from "react";
import "./TeamSection.css";
import { Row, Col, Container } from "react-bootstrap";
import JP_Team from "../../assets/JP_Team.jpg";
import FT_Team from "../../assets/FT_Team.jpg";
import KM_Team from "../../assets/KM_Team.jpg";

function TeamSection() {
  return (
    <div className='MainElementPadding'>
      <Container fluid>
        <div className='Subtitle'>Our Team</div>
        <Row className='text-center'>
          <Col className='my-2'>
            <img src={JP_Team} className='TeamHeadshots' />
            <div className='TeamNames'>JP</div>
            <div>Founder and Tech Lead</div>
          </Col>
          <Col className='my-2'>
            <img src={KM_Team} className='TeamHeadshots' id='Katrina' />
            <div className='TeamNames'>Katrina</div>
            <div>Software Engineer</div>
          </Col>
          <Col className='my-2'>
            <img src={FT_Team} className='TeamHeadshots' />
            <div className='TeamNames'>Fabien</div>
            <div>Junior Software Engineer</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TeamSection;
