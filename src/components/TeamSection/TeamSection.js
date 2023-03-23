import React from "react";
import "./TeamSection.css";
import { Row, Col, Container } from "react-bootstrap";
import jp_abadir from "../../assets/jp-abadir.jpg";
import katrina_martel from "../../assets/katrina-martel.jpg";
import claire_song from "../../assets/claire-song.jpg";
import fabien_thich from "../../assets/fabien-thich.jpg";
import aseer_baset from "../../assets/aseer-baset.png";
import ayesha_parvez from "../../assets/ayesha-parvez.jpg";
import ezra_song from "../../assets/ezra-song.jpg";
import william_zhou from "../../assets/william-zhou.jpg";
import AV_Team from "../../assets/AV_Team.png";
import wing_chang from "../../assets/wing-chang.jpg";
import lucas_kim from "../../assets/lucas-kim.jpg";

function TeamSection() {
  return (
    <div className='MainElementPadding'>
      <Container fluid>
        <div className='Subtitle'>Our Team</div>
        <div className='TeamMembers'>
          <div className='TeamMember'>
            <img src={jp_abadir} className='TeamHeadshots' />
            <div className='TeamNames'>JP</div>
            <div>Founder and Tech Lead</div>
          </div>
          <div className='TeamMember'>
            <img src={claire_song} className='TeamHeadshots' id='Claire'/>
            <div className='TeamNames'>Claire</div>
            <div>Software Engineer</div>
          </div>
          <div className='TeamMember'>
            <img src={katrina_martel} className='TeamHeadshots' id='Katrina' />
            <div className='TeamNames'>Katrina</div>
            <div>Software Engineer</div>
          </div>
          <div className='TeamMember'>
            <img src={fabien_thich} className='TeamHeadshots' />
            <div className='TeamNames'>Fabien</div>
            <div>Junior Software Engineer</div>
          </div>
          <div className='TeamMember'>
            <img src={AV_Team} className='TeamHeadshots' />
            <div className='TeamNames'>Andy</div>
            <div>Software Engineer Intern</div>
          </div>
          <div className='TeamMember'>
            <img src={aseer_baset} className='TeamHeadshots' id='Aseer'/>
            <div className='TeamNames'>Aseer</div>
            <div>Software Engineer Intern</div>
          </div>
          <div className='TeamMember'>
            <img src={ezra_song} className='TeamHeadshots' id='Ezra'/>
            <div className='TeamNames'>Ezra</div>
            <div>Software Engineer Intern</div>
          </div>
          <div className='TeamMember'>
            <img src={william_zhou} className='TeamHeadshots'/>
            <div className='TeamNames'>William</div>
            <div>Software Engineer Intern</div>
          </div>
          <div className='TeamMember'>
            <img src={wing_chang} className='TeamHeadshots'/>
            <div className='TeamNames'>Wing</div>
            <div>Software Engineer Intern</div>
          </div>
          <div className='TeamMember'>
            <img src={lucas_kim} className='TeamHeadshots'/>
            <div className='TeamNames'>Lucas</div>
            <div>Software Engineer Intern</div>
          </div>
          <div className='TeamMember'>
            <img src={ayesha_parvez} className='TeamHeadshots' id='Ayesha'/>
            <div className='TeamNames'>Ayesha</div>
            <div>UI/UX Intern</div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TeamSection;
