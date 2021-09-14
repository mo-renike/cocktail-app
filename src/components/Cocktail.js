import React from "react";
import { Link } from "react-router-dom";

const Cocktail = (props) => {
  return (
    <div className="cocktail">
      <img src={props.img} alt="cocktail" />
      <div className="cocktail-details">
        <h3>{props.name}</h3>
        <small>{props.alcohol}</small>
        <Link to="/details/">View Details</Link>
      </div>
    </div>
  );
};

export default Cocktail;
