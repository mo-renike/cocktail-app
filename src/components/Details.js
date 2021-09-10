import React from "react";
import { Link } from "react-router-dom";

const Details = ({
  img,
  drink,
  alcohol,
  glass,
  ingredient1,
  ingredient2,
  ingredient3,
  ingredient4,
  ingredient5,
  ingredient6,
  ingredient7,
  instructions,
}) => {
  return (
    <div className="details-wrapper">
      <h2>{drink}</h2>
      <div className="details"></div>
      <img src={img} alt="cocktail" />
      <div className="details-info">
        <p>Drink type: {alcohol} </p>
        <p>Glass Type: {glass} </p>
        <h3>Ingredients:</h3>
        <ul>
          <li>{ingredient1}</li>
          <li>{ingredient2}</li>
          <li>{ingredient3}</li>
          <li>{ingredient4}</li>
          <li>{ingredient5}</li>
          <li>{ingredient6}</li>
          <li>{ingredient7}</li>
        </ul>
        <h3>Instructions: </h3>
        <div>{instructions}</div>
      </div>
      <Link to="/">Back to Cocktails</Link>
    </div>
  );
};

export default Details;
