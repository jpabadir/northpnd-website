import './App.css';
import { Link, Element } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import About from './components/About/About';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import Expertise from './components/Expertise/Expertise'
import OurClients from './components/OurClients/OurClients';
import Footer from './components/Footer/Footer';
import './hamburgers.css';
import Fade from 'react-reveal/Fade';
import logo from './assets/transparentLogo.svg';
import homeBackground from './assets/home-background.mp4';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import LocalNavbar from './components/LocalNavbar/LocalNavbar';

function App() {
  const [scrollGoal, setScrollGoal] = useState('')
  function updateThatThing(stuff) {
    setScrollGoal(stuff)
  }

  return (
    <div>
      <Router>
        <LocalNavbar myHandler={updateThatThing} />
        <Routes>
          <Route path='/' element={<Main scrollGoal={scrollGoal} />} />
          <Route path='expertise' element={<Expertise />} />
        </Routes>
        <div style={{ width: '100%', justifyContent: 'center', display: 'flex', backgroundColor: '#212129' }}>
          <div className="element" style={{ display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'center' }}>
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App;
