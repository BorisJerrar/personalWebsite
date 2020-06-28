import React from "react";
import "../Css/Header.css";
export default function Header() {
  return (
    <header>
      <div className="tagline">
        <div className="taglineContent">
          <p>const</p>
          <h2>Passion &#38; Rigor</h2>
          <p>
            = &#40;<span className="pinkify">small touch of craziness</span>&#41; =>
            &#123; <span className="yellowify blinky">|</span>
          </p>
        </div>
      </div>
      <article className="introduction">
        <div className="introductionContent">
          <img
            src={'/Img/mainIntriducion.jpg'}
            alt="Boris Jerrar Introduction"
          />
          <div className="introductionContentText">
            <h4 className="yellowify">Who Am I?</h4>
            <div className="collapseTexte">
              <p>
                Boris Jerrar, 24 years. French Fullstak Devlopper from Lille.
                Intereted by History of Company, Tech and Simplicity since my 13
                years. I decided to follow my dreams and begin a new developer
                life.
              </p>
              <a
                className="pinkify"
                target="_blank"
                rel="noopener noreferrer"
                href="https://certificationprofessionnelle.fr/recherche/rncp/31114"
              >
                Graduate Level 5 for the European Qualifications Framework and
                Level 3 in France
              </a>
            </div>
          </div>
        </div>
      </article>
    </header>
  );
}
