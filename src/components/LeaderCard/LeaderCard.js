import React from "react";
import "./LeaderCard.css";

const LeaderCard = props => (
  // <div className="card"  onClick={props.handleClick}>
  // <div className="card"  onClick={() => props.handleClick(props.clicked)}>
  <div className="card"  onClick={() => props.handleClick(props.id)}>
    <div className="img-container">
      <img alt={props.alt} src={props.src} />
    </div>
    <div className="content">
      <a href={props.link} alt={props.alt} target="_blank">
        {props.alt}
      </a>
    </div>
  </div>
);

export default LeaderCard;
