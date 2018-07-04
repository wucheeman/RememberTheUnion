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

  // TODO: update or remove
  removeLeader = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const leaders = this.state.leaders.filter(leader => leader.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ leaders });
  };

    // handleIncrement increases this.state.count by 1
    handleIncrement = () => {
      // We always use the setState method to update a component's state
      this.setState({ count: this.state.count + 1 });
    };
  
    // handleDecrement decreases this.state.count by 1
    handleDecrement = () => {
      // We always use the setState method to update a component's state
      this.setState({ count: this.state.count - this.state.count });
    };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <div className='jumbotron bg-primary text-white"'>
          <h1>Remember The Union!</h1>
          count={this.state.count}
          {/* <Counter /> */}
        </div>
      <Wrapper>
        {/* <Title>Remember The Union!</Title> */}
        {this.state.leaders.map(leader => (
          <LeaderCard
            // removeLeader={this.removeLeader}
            handleIncrement={this.handleIncrement}
            handleDecrement={this.handleDecrement}
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
