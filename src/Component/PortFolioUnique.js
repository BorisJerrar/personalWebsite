import React from "react";
import "../Css/PortFolioUnique.css";

export default function PortFolioUnique(props) {
  return (
    <div className="portfolio">
      <div className="portfolioTxt">
        <h4>{props.title}</h4>
        <p>
{props.description}
        </p>
        <a href={props.link} target='_blank' rel="noopener noreferrer">See More</a>
      </div>
      <img
        className="portfolioImg"
        src={props.src}
        alt={props.title + "Mockup"}
      />
    </div>
  );
}
