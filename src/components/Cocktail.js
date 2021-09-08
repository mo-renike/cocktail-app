import React from "react";
import Details from "./Details";

const Cocktail = ({ img, drink, alcohol }) => {
  return (
    <div className="cocktail">
      <img src={img} alt="cocktail" />
      <h2>{drink}</h2>
      <p>{alcohol}</p>
      <a href={<Details />}>View Details</a>
    </div>
  );
};

export default Cocktail;
