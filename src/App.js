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
    leaders
  };

  // TODO: update or remove
  removeLeader = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const leaders = this.state.leaders.filter(leader => leader.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ leaders });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
      <div className='jumbotron '>
        <Counter />
        </div>
      <Wrapper>
        {/* <Title>Remember The Union!</Title> */}
        {this.state.leaders.map(leader => (
          <LeaderCard
            removeLeader={this.removeLeader}
            id={leader.id}
            key={leader.id}
            alt={leader.alt}
            src={leader.src}
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
