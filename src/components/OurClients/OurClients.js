import React from 'react';
import './OurClients.css';

import cfaeatoncentre from '../../assets/cfaeatoncentre-transparent.png';
import technucomLogo from '../../assets/technucom-logo.png';
import proximyLogo from '../../assets/proximy-logo.png';
import midstrideLogo from '../../assets/midstride-logo-transparent.png';
import minebrightLogo from '../../assets/minebright-logo.png';
import digitalriseLogo from '../../assets/digitalrise-logo-transparent.png';
import kittyscoLogo from '../../assets/kittysco-logo-transparent.png';

function OurClients() {
  return (
    <div className="pt-4">
      <div className="Subtitle">Our Clients</div>
      <div className="LogosContainer">
        <a href="https://chick-fil-a.ca" target="_blank" rel="noreferrer">
          <img src={cfaeatoncentre} alt="Chick-fil-A Toronto Eaton Centre" ></img>
        </a>
        <a href="https://technucom.com" target="_blank" rel="noreferrer">
          <img src={technucomLogo} alt="TechNuCom" ></img>
        </a>
        <a href="https://proximy.ca" target="_blank" rel="noreferrer">
          <img src={proximyLogo} alt="Proximy"></img>
        </a>
        <a href="https://midstride.com" target="_blank" rel="noreferrer">
          <img src={midstrideLogo} alt="Midstride" ></img>
        </a>
        <a href="https://minebright.com" target="_blank" rel="noreferrer">
          <img src={minebrightLogo} alt="Minebright" ></img>
        </a>
        <a href="https://digitalrise.be" target="_blank" rel="noreferrer">
          <img src={digitalriseLogo} alt="Digital Rise" ></img>
        </a>
        <a href="https://kittys.co" target="_blank" rel="noreferrer">
          <img src={kittyscoLogo} alt="Digital Rise" ></img>
        </a>
      </div>
    </div>
  );
}

export default OurClients;
