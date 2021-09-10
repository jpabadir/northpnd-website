import React from 'react';
import './Home.css';
import downArrow from '../../assets/down-arrow.png';
import { scroller } from 'react-scroll';

function Home() {
  return (
    <div className="HomeMain" style={{ width: `${Math.min(document.documentElement.clientWidth, 1500)}px` }}>
      <div className="HomeContent">
        <div className="HomeMainTitle">We love tech, and we worry about it so you don't have to.</div>
        <div className="TellMeMoreParent">
          <div
            className="TellMeMore"
            onClick={() => {
              scroller.scrollTo('about', { duration: 300, smooth: true, spy: true, offset: -80 });
            }}
          >
            Tell me more
            <br />
            <div style={{ justifyContent: 'center', display: 'flex' }}>
              <img
                src={downArrow}
                alt="Down arrow"
                height="50"
                style={{ WebkitFilter: 'brightness(0) invert(1)', filter: 'brightness(0) invert(1)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
