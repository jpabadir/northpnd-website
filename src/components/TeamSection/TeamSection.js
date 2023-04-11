import React from "react";
import "./TeamSection.css";
import { Row, Col, Container } from "react-bootstrap";
import JP_Team from "../../assets/JP_Team.avif";
import JP_Team_jpg from "../../assets/JP_Team.jpg";
// import KM_Team from "../../assets/KM_Team.jpg";
import CS_Team from "../../assets/CS_Team.avif";
import CS_Team_jpg from "../../assets/CS_Team.jpg"
// import FT_Team from "../../assets/FT_Team.jpg";

function TeamSection() {
  return (
    <div className='MainElementPadding'>
      <Container fluid>
        <div className='Subtitle'>Our Team</div>
        <div className='TeamMembers'>
          <div className='TeamMember'>
            <picture>
              <source type='image/avif' srcSet={JP_Team} />
              <img src={JP_Team_jpg} className='TeamHeadshots' />
            </picture>
            <div className='TeamNames'>JP Abadir</div>
            <div className='TeamRoles'> Founder and Tech Lead</div>
          </div>
          <div className='TeamMember'>
            <picture>
              <source type='image/avif' srcSet={CS_Team} />
              <img src={CS_Team_jpg} className='TeamHeadshots' id='Claire'/>
            </picture>
            <div className='TeamNames'>Claire Song</div>
            <div className='TeamRoles'>Software Engineer</div>
          </div>
          {/* <div className='TeamMember'>
            <img src={KM_Team} className='TeamHeadshots' id='Katrina' />
            <div className='TeamNames'>Katrina</div>
            <div>Software Engineer</div>
          </div>
          <div className='TeamMember'>
            <img src={FT_Team} className='TeamHeadshots' />
            <div className='TeamNames'>Fabien</div>
            <div>Junior Software Engineer</div>
          </div> */}
        </div>
      </Container>
    </div>
  );
}

export default TeamSection;
