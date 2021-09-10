import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ img, drink, alcohol, glass, key }) => {
  return (
    <div className="cocktail">
      <img src={img} alt="cocktail" />
      <div className="cocktail-details">
        <h3>{drink}</h3>
        <small>{alcohol}</small>
        <small>{glass} Drink</small>
        <Link to="/details">View Details</Link>
      </div>
    </div>
  );
};

export default Cocktail;
