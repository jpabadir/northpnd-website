import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, Element, Events } from 'react-scroll';
import { useEffect } from 'react';

function App() {
  // useEffect(() => {
  //   Events.scrollEvent.register('begin', function () {
  //     console.log('begin', arguments);
  //   });
  //   Events.scrollEvent.register('end', function () {
  //     console.log('end', arguments);
  //   });

  //   return function cleanup() {
  //     Events.scrollEvent.remove('begin');
  //     Events.scrollEvent.remove('end');
  //   };
  // }, []);

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
        <Navbar.Brand href="#home">North P&D, Inc.</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <li>
              <Link
                activeClass="active"
                className="test1 nav-link"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                style={{ display: 'inline-block', margin: '20px' }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="test2 nav-link"
                to="pastWork"
                spy={true}
                smooth={true}
                duration={500}
                style={{ display: 'inline-block', margin: '20px' }}
              >
                Past Work
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="test2 nav-link"
                to="services"
                spy={true}
                smooth={true}
                duration={500}
                style={{ display: 'inline-block', margin: '20px' }}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="test2 nav-link"
                to="contactUs"
                spy={true}
                smooth={true}
                duration={500}
                style={{ display: 'inline-block', margin: '20px' }}
              >
                Contact Us
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Element style={{ height: '500px' }} name="about" className="element">
        About
      </Element>
      <Element style={{ height: '500px' }} name="pastWork" className="element">
        Past Work
      </Element>
      <Element style={{ height: '500px' }} name="services" className="element">
        Services
      </Element>
      <Element style={{ height: '500px' }} name="contactUs" className="element">
        Contact Us
      </Element>
    </div>
  );
}

export default App;
