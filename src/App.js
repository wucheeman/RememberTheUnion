import React, { Component } from "react";
import LeaderCard from "./components/LeaderCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import HowTo from "./components/HowTo";
import leaders from "./leaders.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    leaders,
    count: 0,
    clickOutcome: 'Click and Remember!',
    bestCount: 0
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
      const newCount = this.state.count + 1;
      let displayMsg = 'You Guessed Correctly!';
      this.setState({ count: newCount });
      if (newCount === this.state.leaders.length) {
        displayMsg = "WOW! YOU'VE WON!"
      }
      this.setState({clickOutcome: displayMsg})
      // count not actually updated yet, so use newCount
      if (newCount >= this.state.bestCount) {
        this.setState({ bestCount: newCount });
      }
    } else {
      this.setState({clickOutcome: 'You Guessed Incorrectly!'})
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
        <Navbar 
          clickOutcome={this.state.clickOutcome}
          count={this.state.count}
          bestCount={this.state.bestCount}
        />
        <HowTo />
      <Wrapper>
        {this.state.leaders.map(leader => (
          <LeaderCard
            handleClick={this.handleClick}
            id={leader.id}
            key={leader.id}
            alt={leader.alt}
            src={leader.src}
            clicked={leader.clicked}
            link={leader.link}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
