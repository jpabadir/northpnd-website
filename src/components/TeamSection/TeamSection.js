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
                    <Col>
                        <img src={JP_Team} className="TeamHeadshots" />
                        <div className='NameAndOccupation'>
                            <div style={{ fontSize: '20px' }}>JP</div>
                            <div style={{ fontSize: '15px' }}>Owner and tech lead</div>
                        </div>
                    </Col>
                    <Col>
                        <div className='list-orde'>
                            <img src={FT_Team} className="TeamHeadshots" />
                            <div className='NameAndOccupation'>
                                <div style={{ fontSize: '20px' }}>Fabien Thich</div>
                                <div style={{ fontSize: '15px' }}>Software Engineer - Junior</div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='list-orde'>
                            <img src={KJ_Team} className="TeamHeadshots" />
                            <div className='NameAndOccupation'>
                                <div style={{ fontSize: '20px' }}>Khallan Jamal</div>
                                <div style={{ fontSize: '15px' }}>Software Engineer - Intern</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container >
        </div >
    );
}

export default TeamSection;
