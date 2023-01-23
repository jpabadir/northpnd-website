import './Footer.css';
import { NavLink, Link, useLocation } from "react-router-dom";
import InternTestimonials from "../InternTestimonials/InternTestimonials";
import { Element } from "react-scroll";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function getClasses() {
  return `${window.location.pathname == "/InternTestimonials"
    // ? "GreyNavbar"
    // : "TransparentNavbar"
    } `
}
function Footer() {
  return (
    <div className="FooterMain">
      <div className="FooterCompanyName">North P&amp;D, Inc.</div>
      <hr className="FooterHr" />
      <div className="FooterLinks">
        <a href="https://www.facebook.com/northpnd" target="_blank" rel="noreferrer" className="FooterLink">
          Facebook
        </a>
        <a href="https://www.linkedin.com/company/northpnd" target="_blank" rel="noreferrer" className="FooterLink">
          LinkedIn
        </a>
        <a href="https://twitter.com/northpndinc" target="_blank" rel="noreferrer" className="FooterLink">
          Twitter
        </a>
        <a href="https://goo.gl/maps/QnvFWXVoY7wKMg88A" target="_blank" rel="noreferrer" className="FooterLink">
          Google
        </a>
        <a href="https://www.northpnd.com/privacy" target="_blank" rel="noreferrer" className="FooterLink">
          Privacy
        </a>
          <Link to="/interntestimonials"  target="_blank" rel="noreferrer" className="FooterLink">
            Intern Testimonials
          </Link>
        </div>
    </div>
  );
}

export default Footer;
// src="../InternTestimonials/InternTestimonials"