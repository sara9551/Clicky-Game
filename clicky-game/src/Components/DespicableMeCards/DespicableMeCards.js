import React from "react";
import "./DespicableMeCards.css";

const DespicableMeCards = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
    </div>
    <span onClick={() => props.removeFriend(props.id)} className="remove">
      𝘅
    </span>
  </div>
);

export default DespicableMeCards;