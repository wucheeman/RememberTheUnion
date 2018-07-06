import React from "react";
import "./HowTo.css";

const HowTo = props =>  (
  <div className='row text-white howto'> 
    <div className='col-sm-4 text-center pt-4 font-weight-bold border-right'>
      <h4>How to Play</h4>
    </div>
    <div className='col-sm-8 pl-4'>
      <h6>Hurrah for the Union is a game of clicks and memory. Win by getting 15 points, earning one point each time a square is clicked once.</h6>
      <h6>If you click the same square again, you have to start over. To learn more these people, click their names.</h6>
      <h6>Good luck!</h6>
    </div>
  </div>
);

export default HowTo;