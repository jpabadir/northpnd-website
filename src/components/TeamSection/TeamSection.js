import React from "react";
import "./TeamSection.css";
import { Row, Col, Container } from "react-bootstrap";
import JP_Team from "../../assets/JP_Team.jpg";
import KM_Team from "../../assets/KM_Team.jpg";
import CS_Team from "../../assets/CS_Team.jpg";
import FT_Team from "../../assets/FT_Team.jpg";
import AB_Team from "../../assets/AB_Team.png";
import AP_Team from "../../assets/AP_Team.jpg";
import ES_Team from "../../assets/ES_Team.jpg";
import WZ_Team from "../../assets/WZ_Team.jpg";
import AV_Team from "../../assets/AV_Team.png";

function TeamSection() {
  return (
    <div className='MainElementPadding'>
      <Container fluid>
        <div className='Subtitle'>Our Team</div>
        <div className='TeamMembers'>
          <div className='TeamMember'>
            <img src={JP_Team} className='TeamHeadshots' />
            <div className='TeamNames'>JP</div>
            <div>Founder and Tech Lead</div>
          </div>
          <div className='TeamMember'>
            <img src={KM_Team} className='TeamHeadshots' id='Katrina' />
            <div className='TeamNames'>Katrina</div>
            <div>Software Engineer</div>
          </div>
          <div className='TeamMember'>
            <img src={CS_Team} className='TeamHeadshots' id='Claire'/>
            <div className='TeamNames'>Claire</div>
            <div>Software Engineer</div>
          </div>
          <div className='TeamMember'>
            <img src={FT_Team} className='TeamHeadshots' />
            <div className='TeamNames'>Fabien</div>
            <div>Junior Software Engineer</div>
          </div>
          <div className='TeamMember'>
            <img src={AV_Team} className='TeamHeadshots' />
            <div className='TeamNames'>Andy</div>
            <div>Software Engineer Intern</div>
          </div>
          <div className='TeamMember'>
            <img src={AB_Team} className='TeamHeadshots' id='Aseer'/>
            <div className='TeamNames'>Aseer</div>
            <div>Software Engineer Intern</div>
          </div>
          <div className='TeamMember'>
            <img src={ES_Team} className='TeamHeadshots' id='Erza'/>
            <div className='TeamNames'>Erza</div>
            <div>Software Engineer Intern</div>
          </div>
          <div className='TeamMember'>
            <img src={WZ_Team} className='TeamHeadshots'/>
            <div className='TeamNames'>William</div>
            <div>Software Engineer Intern</div>
          </div>
          <div className='TeamMember'>
            <img src={AP_Team} className='TeamHeadshots' id='Ayesha'/>
            <div className='TeamNames'>Ayesha</div>
            <div>UI/UX Intern</div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TeamSection;
