import React from "react";
import "./LeaderCard.css";

const FriendCard = props => (
  // <div className="card"  onClick={props.handleClick}>
  // <div className="card"  onClick={() => props.handleClick(props.clicked)}>
  <div className="card"  onClick={() => props.handleClick(props.id)}>
    <div className="img-container">
      <img alt={props.alt} src={props.src} />
    </div>
    <div className="content">
      {/* <ul>
        <li> */}
          {props.alt}
        {/* </li>
       </ul> */}
    </div>
  </div>
);

export default FriendCard;
