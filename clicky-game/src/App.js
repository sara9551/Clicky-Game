import React, { Component } from "react";
import DespicableMeCards from "./components/DespicableMeCards";
import NavBar from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import Intro from "./components/Intro";
import despicable from "./despicable.json";
import "./App.css";

class App extends Component {
  // Setting this.state.despicable to the despicable.json array
  state = {
    despicable
  };

  clickCard = id => {
    // Filter this.state.despicable for despicable with an id not equal to the id being removed
    const despicable = this.state.despicable.filter(despicables => despicables.id !== id);
    // Set this.state.despicable equal to the new despicable array
    this.setState({ despicable });
  };


  shuffleAnimals = id => {
    for (let i = id.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [id[i], id[j]] = [id[j], id[i]];
  }
}

  render() {
    return (
      <Wrapper>
        <NavBar>
          Despicable Me Clicky Game
          </NavBar>
       <Intro>
          Find the match!!
        </Intro>
{this.state.despicable.map(despicables => (
        <DespicableMeCards
            clickCard={this.clickCard}
            key={despicables.id}
            id={despicables.id}
            image={despicables.image}
        />
        ))}
      </Wrapper>
    );
  }
}

export default App;
