import './App.css';
import { Navbar, Nav } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
        <Navbar.Brand href="/">North P&D</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#work">Past Work</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="Component" id="/">
        <div className="MainTitle">High-quality Software Solutions</div>
      </div>
      <div className="Component" id="about">
        <div className="MainTitle">About</div>
      </div>
      <div className="Component" id="work">
        <div className="MainTitle">Work</div>
      </div>
      <div className="Component" id="services">
        <div className="MainTitle">Services</div>
      </div>
      <div className="Component" id="contact">
        <div className="MainTitle">Contact</div>
      </div>
    </div>
  );
}

export default App;
