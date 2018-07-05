import React, { Component } from "react";
import LeaderCard from "./components/LeaderCard";
import Wrapper from "./components/Wrapper";
// TODO - delete
// import Title from "./components/Title";
// import Counter from './components/Counter';
import leaders from "./leaders.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    leaders,
    count: 0
  };

  shuffle = (leaderArray) => {
    // This shuffles the leaders array using the Knuth-Fisher-Yates algorithm.
    // This particular implementation would be slow for a large array
    for (let i = leaderArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [leaderArray[i], leaderArray[j]] = [leaderArray[j], leaderArray[i]];
    }
    return leaderArray;

  }

  handleClick = id => {
    const leaders = this.state.leaders.filter(leader => leader.id === id);
    if (!leaders[0].clicked) {
      leaders[0].clicked = true;
      this.setState({ count: this.state.count + 1 });
    } else {
      // game over, so reset count and clicked
      this.setState({ count: 0 });
      // make copy so not mutating state directly
      const resetArray = this.state.leaders.slice();
      resetArray.forEach((leader) => {
        leader.clicked = false;
      });
      this.setState({leaders: resetArray});
    }
    // pass a copy so don't mutate state directly
    const leaderArray = this.shuffle(this.state.leaders.slice());
    // multiple setState calls in a handler are OK
    this.setState({leaders: leaderArray});
  };

  // Map over this.state.leaders and render a LeaderCard component for each leader object
  render() {
    return (
      <div>
        <div className='navbar bg-primary text-white'>
          <ul>
              <li id='gameName'>Hurrah for the Union!</li>
              <li id='guessOutcome'>Click and Remember!</li>
              <li id='gameCount'>Count: {this.state.count} | Your Best: 42</li>
          </ul>
        </div>
        {/* <div class='container'> */}
          <div className='row instructions bg-info'>
            <div className='col-sm-3'>
              <h4>Instructions</h4>
            </div>
            <div className='col-sm-9'>
              <h6>Hurrah for the Union is a game of clicks and memory. You get one point per square clicked -- but only the first time!</h6>
              <h6>If you click the same square again, you lose and have to start over. Good luck!</h6>
              
            </div>
          </div>
        {/* </div> */}
      <Wrapper>
        {this.state.leaders.map(leader => (
          <LeaderCard
            // removeLeader={this.removeLeader}
            handleClick={this.handleClick}
            // handleDecrement={this.handleDecrement}
            id={leader.id}
            key={leader.id}
            alt={leader.alt}
            src={leader.src}
            clicked={leader.clicked}
            // occupation={friend.occupation}
            // location={friend.location}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
