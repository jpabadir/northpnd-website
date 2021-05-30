import React from 'react';
import './Home.css';
import downArrow from '../../assets/down-arrow.png';
import { scroller } from 'react-scroll';

function Home() {
  return (
    <div className="HomeMain">
      <div className="HomeMainTitle">We love tech, and we worry about it so you don't have to.</div>
      <div className="TellMeMoreParent">
        <div
          className="TellMeMore"
          onClick={() => {
            scroller.scrollTo('about', { duration: 300, smooth: true, spy: true });
          }}
        >
          Really? Tell Me More.
          <br />
          <img src={downArrow} alt="Down arrow" height="50" style={{ paddingTop: '10px' }} />
        </div>
      </div>
    </div>
  );
}

export default Home;
