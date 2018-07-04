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
  // removeLeader = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const leaders = this.state.leaders.filter(leader => leader.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ leaders });
  // };
 
    handleClick = id => {
      const leaders = this.state.leaders.filter(leader => leader.id === id);
      if (!leaders[0].clicked) {
        leaders[0].clicked = true;
        this.setState({ count: this.state.count + 1 });
      } else {
        this.setState({ count: this.state.count - this.state.count });
      }
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
