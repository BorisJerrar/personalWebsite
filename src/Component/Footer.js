import React from "react";
import "../Css/Footer.css";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footerLink">
          <a href="###">Twitter</a>
          <a href="###">Github</a>
          <a href="###">Linkedin</a>
        </div>
        <div className="footerCenter">
          <a href="mailto:contact@borisjerrar.fr">contact@borisjerrar.fr</a>
          <p>This Web Site is using HTML5 | CSS3</p>
          <p>Javascript/React | NodeJS</p>
        </div>
        <div className="footerRight">
          <p>Desined and Created in Adobe Xd By Boris Jerrar</p>
          <p>Realized after 1 month of bootcamp</p>
          <p>Boris Jerrar All Right Reserved</p>
        </div>
      </footer>
    </div>
  );
}
