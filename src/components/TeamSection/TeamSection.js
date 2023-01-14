import React, { useState, useLayoutEffect } from 'react';
import './TeamSection.css';
import { Row, Col, Container } from 'react-bootstrap';
import JP_Team from '../../assets/JP_Team.jpg';
import FT_Team from '../../assets/FT_Team.jpg';
import KJ_Team from '../../assets/KJ_Team.jpg';

function TeamSection() {
    return (
        <div className="MainElementPadding">
            <Container fluid>
                <div className="Subtitle">Our Team</div>
                <Row className='text-center'>
                    <Col className='my-2'>
                        <img src={JP_Team} className="TeamHeadshots" />
                        <div style={{ fontSize: '20px' }}>JP</div>
                        <div>Founder and Tech Lead</div>
                    </Col>
                    <Col className='my-2'>
                        <img src={FT_Team} className="TeamHeadshots" />
                        <div style={{ fontSize: '20px' }}>Fabien</div>
                        <div>Software Engineer - Junior</div>
                    </Col>
                    <Col className='my-2'>
                        <img src={KJ_Team} className="TeamHeadshots" />
                        <div style={{ fontSize: '20px' }}>Khallan</div>
                        <div>Software Engineer - Intern</div>
                    </Col>
                </Row>
            </Container >
        </div >
    );
}

export default TeamSection;
