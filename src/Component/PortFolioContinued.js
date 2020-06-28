import React from "react";
import "../Css/PortFolioContinued.css";

export default function PortFolioUnique(props) {
  return (
    <div className="portfolioContinued">
      <div className="portfolioTxtContinued">
        <h4>{props.title}</h4>
        <p>
{props.description}
        </p>
        <a href={props.link} target='_blank' rel="noopener noreferrer">Check My Github</a>
      </div>
    </div>
  );
}
