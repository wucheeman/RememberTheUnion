import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <div className='navbar bg-primary text-white fixed-top'>
  <ul>
      <li id='gameName'>Hurrah for the Union!</li>
      <li id='guessOutcome'>{props.clickOutcome}</li>
      <li id='gameCount'>Count: {props.count} | Your Best Count: {props.bestCount}</li>
  </ul>
</div>
);

export default Navbar;