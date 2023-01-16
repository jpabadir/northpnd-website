import React from "react";
import "./TeamSection.css";
import { Row, Col, Container } from "react-bootstrap";
import JP_Team from "../../assets/JP_Team.jpg";
import FT_Team from "../../assets/FT_Team.jpg";
import KJ_Team from "../../assets/KJ_Team.jpg";

function TeamSection() {
  const staff = [
    {
      name: "JP",
      position: "Founder and Tech Lead",
      headshot: JP_Team,
    },
    {
      name: "Fabien",
      position: "Software Engineer - Junior",
      headshot: FT_Team,
    },
    {
      name: "Khallan",
      position: "Software Engineer - Intern",
      headshot: KJ_Team,
    },
  ];

  return (
    <div className="MainElementPadding">
      <Container fluid>
        <div className="Subtitle">Our Team</div>
        <Row className="text-center">
          {staff.map((staff) => {
            return (
              <Col className="my-2">
                <img src={staff.headshot} className="TeamHeadshots" />
                <div style={{ fontSize: "20px" }}>{staff.name}</div>
                <div>{staff.position}</div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default TeamSection;
