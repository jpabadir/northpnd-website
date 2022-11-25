import './App.css';
import { Link, Element } from 'react-scroll';
import { Navbar, Nav } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import About from './components/About/About';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import OurClients from './components/OurClients/OurClients';
import Footer from './components/Footer/Footer';
import './hamburgers.css';
import Fade from 'react-reveal/Fade';
import logo from './assets/transparentLogo.svg';
import homeBackground from './assets/home-background.mp4';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Expertise from './components/Expertise/Expertise';


const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

const scrollAnimationTrigger = 50;

function App() {
  useEffect(() => {
    document.addEventListener('scroll', () => {
      setMyScrollY(window.scrollY);
    });
  }, []);


  const refContainer = useRef(null);
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [myScrollY, setMyScrollY] = useState(0);
  const [scrollSpy, setScrollSpy] = useState(true);

  useEffect(() => {
    // Use of RefContainer below is just a way to pass the body scroll functions something, I don't really need it.
    if (isToggleOpen) disableBodyScroll(refContainer.current);
    else enableBodyScroll(refContainer.current);
  }, [isToggleOpen]);

  useEffect(() => {
    setScrollSpy(
      document.getElementById('bottomPart') != null && window.innerHeight - 80 < document.getElementById('bottomPart').clientHeight
    );
  }, []);

  function closeToggle() {
    if (isToggleOpen) refContainer.current.click();
  }

  function toggleIsToggleOpen() {
    setIsToggleOpen(!isToggleOpen);
  }



  return (
    <Router baseName='/'>
      <div className='App'>
        <nav>
          <ul>
            <Link to='/expertise'>
              <li>Expertise</li>
            </Link>
          </ul>
        </nav>
        <Routes>
         <Route path='expertise' element={<Expertise />} /> 
        </Routes>
      </div>
    </Router>
  );

  // return (    
  //   <div>
  //     <Navbar
  //       id="myNavbar"
  //       collapseOnSelect
  //       expand="lg"
  //       variant="dark"
  //       fixed="top"
  //       className={`${myScrollY > scrollAnimationTrigger || isToggleOpen ? 'GreyNavbar' : 'TransparentNavbar'} ${
  //         isToggleOpen ? 'FullNav' : 'TopNav'
  //       } Navbar`}
  //       style={{ height: isToggleOpen ? '100vh' : '80px' }}
  //     >
  //       <Navbar.Brand href="/" style={{ fontSize: '25px' }}>
  //         <img src={logo} alt="logo" className="Logo" />
  //       </Navbar.Brand>
  //       <Navbar.Toggle
  //         aria-controls="responsive-navbar-nav"
  //         ref={refContainer}
  //         onClick={toggleIsToggleOpen}
  //         className="Toggle"
  //         id="toggler"
  //       >
  //         <div className={`hamburger hamburger--slider ${isToggleOpen && 'is-active'}`}>
  //           <div className="hamburger-box">
  //             <div className="hamburger-inner"></div>
  //           </div>
  //         </div>
  //       </Navbar.Toggle>
  //       <Navbar.Collapse id="responsive-navbar-nav">
  //         <Nav className="ml-auto text-center">
  //           <li>
  //             <Link
  //               activeClass="active"
  //               className="Link WhiteLink"
  //               to="about"
  //               spy={scrollSpy}
  //               smooth={true}
  //               duration={300}
  //               style={{ display: 'inline-block', margin: '20px' }}
  //               onClick={closeToggle}
  //               offset={-80}
  //             >
  //               About
  //             </Link>
  //           </li>
  //           <li>
  //             <Link
  //               activeClass="active"
  //               className="Link WhiteLink"
  //               to="ourClients"
  //               spy={scrollSpy}
  //               smooth={true}
  //               duration={300}
  //               style={{ display: 'inline-block', margin: '20px' }}
  //               onClick={closeToggle}
  //               offset={-80}
  //             >
  //               Our Clients
  //             </Link>
  //           </li>
  //           <li>
  //             <Router>
  //             <div classame='/expertise'>
  //             <Link
  //               activeClass="active"
  //               className="Link WhiteLink"
  //               to="Expertise"
  //               duration={300}
  //               style={{ display: 'inline-block', margin: '20px' }}
  //               onClick={closeToggle}
  //               offset={-80}
  //               >
  //               Expertise
  //               </Link>
  //             </div>
  //             </Router>
  //           </li>
  //           <li>
  //             <Link
  //               activeClass="active"
  //               className="Link WhiteLink"
  //               to="services"
  //               spy={scrollSpy}
  //               smooth={true}
  //               duration={300}
  //               style={{ display: 'inline-block', margin: '20px' }}
  //               onClick={closeToggle}
  //               offset={-80}
  //             >
  //               Services
  //             </Link>
  //           </li>
  //           <li>
  //             <Link
  //               activeClass="active"
  //               className="Link WhiteLink"
  //               to="contactUs"
  //               spy={scrollSpy}
  //               smooth={true}
  //               duration={300}
  //               style={{ display: 'inline-block', margin: '20px' }}
  //               onClick={closeToggle}
  //               offset={-80}
  //             >
  //               Contact Us
  //             </Link>
  //           </li>
  //         </Nav>
  //       </Navbar.Collapse>
  //     </Navbar>
  //     <div>
  //       <div onClick={closeToggle} style={{ position: 'relative', width: '100%' }}>
  //         <video src={homeBackground} className="BackgroundVideo Overlay" type="video/mov" playsInline loop autoPlay muted />
  //         <div className="Overlay DarkOverlay" />
  //         <Fade duration={1200}>
  //           <div style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
  //             <Element
  //               name="home"
  //               className="element"
  //               style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', width: '100%' }}
  //             >
  //               <div style={{ paddingTop: '80px' }}>
  //                 <Home />
  //               </div>
  //             </Element>
  //           </div>
  //         </Fade>
  //         <div className="FirstSeparator" />
  //         <div style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
  //           <Element name="about" className="element" style={{ width: '100%' }}>
  //             <About />
  //           </Element>
  //         </div>
  //         <div style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
  //           <Element name="ourClients" className="element" style={{ width: '100%' }}>
  //             <OurClients />
  //           </Element>
  //         </div>
  //         <div style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
  //         <Element name="Expertise" className="element" style={{ width: '100%' }}>
  //           <Router>
  //             <Routes>
  //               <Route path='/expertise' element={<Expertise />}/>
  //             </Routes>
  //           </Router>              
  //         </Element>
  //         </div>
  //         <div style={{ width: '100%', backgroundColor: '#151419', color: '#ededed' }}>
  //           <div className="WhiteGhost Ghost" style={{ height: `${window.innerWidth / 8 - 10}px` }} />
  //           <div className="Spacer" style={{ height: `${window.innerWidth / 8}px` }} />
  //           <div className="Ghost" style={{ height: `${window.innerWidth / 8 - 10}px` }} />
  //           <div style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
  //             <Element name="services" className="element" style={{ width: '100%' }}>
  //               <Services />
  //             </Element>
  //           </div>
  //           <div id="bottomPart">
  //             <div style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
  //               <Element name="contactUs" className="element" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
  //                 <Contact />
  //               </Element>
  //             </div>
  //             <div style={{ width: '100%', justifyContent: 'center', display: 'flex', backgroundColor: '#212129' }}>
  //               <div className="element" style={{ display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'center' }}>
  //                 <Footer />
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>

  // );
}

export default App;