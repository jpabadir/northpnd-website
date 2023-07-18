import React from "react";
import "./OurClients.css";
import { Container, Row } from "react-bootstrap";

import cfaeatoncentre from "../../assets/cfaeatoncentre-transparent.png";
import technucomLogo from "../../assets/technucom-logo.png";
import proximyLogo from "../../assets/proximy-logo.png";
import midstrideLogo from "../../assets/midstride-logo-transparent.png";
import minebrightLogo from "../../assets/minebright-logo.png";
import digitalriseLogo from "../../assets/digitalrise-logo-transparent.png";
import kittyscoLogo from "../../assets/kittysco-logo-transparent.png";

const clients = [
  {
    imgName: cfaeatoncentre,
    webLink: "https://chick-fil-a.ca",
    alt: "Chick-fil-A Toronto Eaton Centre",
  },
  {
    imgName: technucomLogo,
    webLink: "https://technucom.com",
    alt: "TechNuCom",
  },
  {
    imgName: proximyLogo,
    webLink: "https://technucom.com",
    alt: "Proximy",
  },
  {
    imgName: midstrideLogo,
    webLink: "https://midstride.com",
    alt: "Midstride",
  },
  {
    imgName: minebrightLogo,
    webLink: "https://minebright.com",
    alt: "Minebright",
  },
  {
    imgName: digitalriseLogo,
    webLink: "https://digitalrise.be",
    alt: "Digital Rise",
  },
  {
    imgName: kittyscoLogo,
    webLink: "https://kittys.co",
    alt: "Kittys Co",
  },
];

function OurClients() {
  return (
    <Container fluid>
      <Row>
        <div className="Subtitle pt-4">Our Clients</div>
        <div className="LogosContainer">
          {clients.map((client) => (
            <a href={client.webLink} target="_blank" rel="noreferrer" key={client.alt}>
              <img src={client.imgName} alt={client.alt}></img>
            </a>
          ))}
        </div>
      </Row>
    </Container>
  );
}

export default OurClients;
