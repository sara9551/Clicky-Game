import React from "react";
import "./DespicableMeCards.css";

const DespicableMeCards = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
    </div>
    <div onClick={() => props.clickCard}></div>
  </div>
);

export default DespicableMeCards;