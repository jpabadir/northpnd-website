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
                <Row>
                    <div className="Subtitle">Our Team</div>
                    <div className='text-center'>
                        <img src={JP_Team} className="TeamHeadshots" />
                        <div className='NameAndOccupation'>
                            <div style={{ fontSize: '20px' }}>JP</div>
                            <div style={{ fontSize: '15px' }}>Principal Software Engineer</div>
                        </div>
                        <div className='list-order'>
                            <img src={KJ_Team} className="TeamHeadshots" />
                            <div className='NameAndOccupation'>
                                <div style={{ fontSize: '20px' }}>Khallan Jamal</div>
                                <div style={{ fontSize: '15px' }}>Software Engineer Intern</div>
                            </div>
                        </div>
                        <div className='list-order'>
                            <img src={FT_Team} className="TeamHeadshots" />
                            <div className='NameAndOccupation'>
                                <div style={{ fontSize: '20px' }}>Fabien Thich</div>
                                <div style={{ fontSize: '15px' }}>Software Engineer Intern</div>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container >
        </div>
    );
}

export default TeamSection;
