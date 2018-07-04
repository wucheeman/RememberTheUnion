import React from "react";
import "./LeaderCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.alt} src={props.src} />
    </div>
    {/* <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li>
      </ul>
    </div> */}
    {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
      𝘅
    </span> */}
    <button className="btn btn-primary" onClick={props.handleIncrement}>
      Increment
    </button>{" "}
    <button className="btn btn-danger" onClick={props.handleDecrement}>
      Decrement
    </button>
  </div>
);

export default FriendCard;
