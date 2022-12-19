import React, { useState, useLayoutEffect } from 'react';
import './TeamSection.css';
import { Row, Col, Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import JP_Team from '../../assets/JP_Team.jpg';

function TeamSection() {
    return (
        // [
        //     {"personName": "JP", "position": "ower", "imagePath": ""},
        //     {"personName": "JP", "position": "ower", "imagePath": ""},
        //     {"personName": "JP", "position": "ower", "imagePath": ""}
        // ]

        <div className="MainElementPadding">
            <Container fluid>
                <div className="TextBlock">
                    <div className="Subtitle">Our Team at North P&D</div>
                    <Fade duration={1200}>
                        <div className="d-flex justify-content-left">
                            <img src={JP_Team} className="TeamHeadshots" />
                                <div className='NameAndOccupation'>
                                    <div style={{ fontSize: '20px' }}>Jean-Philippe</div>
                                    <div style={{ fontSize: '15px' }}>Principal Software Engineer</div>
                                </div>
                        </div>
                    </Fade>
                </div>
            </Container>
        </div>
    );
}

export default TeamSection;