import React, { Component } from "react";
import LeaderCard from "./components/LeaderCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Counter from './components/Counter';
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
        <div className='jumbotron bg-primary text-white mb-0'>
          <h1>Remember The Union!</h1>
          count={this.state.count}
          {/* <Counter /> */}
        </div>
      <Wrapper>
        {/* <Title>Remember The Union!</Title> */}
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
