import React from "react";
import "../Css/PortFolio.css";
import PortFolioUnique from "./PortFolioUnique";
import PortFolioContinued from "./PortFolioContinued";

export default function PortFolio() {
  return (
    <div className="containerFolio">
      <h3 className="pinkify">Portfolio</h3>
      <div className="warpperFolio">
        <PortFolioUnique
          title="Waventure"
          description="Waventure is the first Audiodrama french streaming website, fully free. Coded with Node, PostgresSql, React, Javascript and CSS3"
          link="https://github.com/BorisJerrar/waventure"
          src="/Img/Portfolio.jpg"
        />
        <PortFolioUnique
          title="Silent Wave Studio"
          description="Fashion designer, pattern maker and textile print designer based in Amsterdam.
          She needed a modern portfolio, animation on scroll. I has absolutely free to do anything.
          I created, designed and coded the integrality of this website in HTML5, CSS3, Javascript, Php"
          link="https://www.silentwavestudio.com"
          src="/Img/Portfolio3.jpg"
        />
        <PortFolioUnique
          title="BorisJerrar | Alpha Version"
          description="Before my bootcamp, i had to prove my motivation, i decided to integrate this little web site. Coded in HTML5, CSS3 and Jquery"
          link="https://web.archive.org/web/20191114004432/https://www.borisjerrar.fr/"
          src="/Img/Portfolio2.jpg"
        />
                <PortFolioUnique
          title="Cow.io | Alpha Version"
          description="Before my bootcamp, i had to prove my motivation, i decided to integrate this little web site. Coded in HTML5, CSS3 and Jquery"
          link="https://web.archive.org/web/20191114004432/https://www.borisjerrar.fr/"
          src="/Img/Portfolio4.jpg"
        />
                        <PortFolioUnique
          title="Integrations | Exercices"
          description="Before my bootcamp, i had to prove my motivation, i decided to integrate this little web site. Coded in HTML5, CSS3 and Jquery"
          link="https://web.archive.org/web/20191114004432/https://www.borisjerrar.fr/"
          src="/Img/Portfolio5.jpg"
        />
                                <PortFolioContinued
          title="And more..."
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, amet?"
          link="https://github.com/BorisJerrar"
        />
      </div>
    </div>
  );
}
