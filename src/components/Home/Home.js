import React from 'react';
import './Home.css';
import downArrow from '../../assets/down-arrow.png';
import { scroller } from 'react-scroll';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation("home")

  return (
    <div className="HomeMain" style={{ width: `${Math.min(document.documentElement.clientWidth*0.98, 1500)}px` }}>
      <div className="HomeContent">
        <h1 className="HomeMainTitle">{t("title")}</h1>
        <div className="TellMeMoreParent">
          <div
            className="TellMeMore"
            onClick={() => {
              scroller.scrollTo('about', { duration: 0, smooth: true, spy: true, offset: -80 });
            }}
          >
            {t("learn_more")}
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
