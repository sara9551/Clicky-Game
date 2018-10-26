import React, { Component } from "react";
//import the Despicable Me Cards
import DespicableMeCards from "./components/DespicableMeCards";
//import the NavBar
import NavBar from "./components/NavBar";
//import the Wrapper
import Wrapper from "./components/Wrapper";
//import the "Intro"
import Intro from "./components/Intro";
//import the jason file with all the pictures and id's
import despicable from "./despicable.json";
import "./App.css";

class App extends Component {
  // Setting this.state.despicable to the despicable.json
  state = {
    despicable
  };

  clickCard = id => {
    // Filter this.state.despicable for despicable with an id not equal to the id
    const despicable = this.state.despicable.filter(despicables => despicables.id !== id);
  };

  //SHOULD shuffle the animal cards
  shuffleAnimals = id => {
  //SHOULD use for loop for the shuffle of the cards
    for (let i = id.length - 1; i > 0; i--) {
  //SHOULD use this to have it return a random card
    Math.floor(Math.random() * (i + 1));
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
