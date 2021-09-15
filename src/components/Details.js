import React from "react";
import { Link } from "react-router-dom";

const Details = (props) => {
  // console.log(props);
  return (
    <div className="details-wrapper">
      <h2>{props.name}</h2>
      <div className="details">
        <img src={props.img} alt="cocktail" />

        <div className="details-info">
          <p>Drink type: {props.alcohol} </p>
          <p>Glass Type: {props.glass} </p>
          <h3>Ingredients: </h3>
          <ul>
            <li>{props.ingr1}</li>
            <li>{props.ingr2}</li>
            <li>{props.ingr3}</li>
            <li>{props.ingr4}</li>
            <li>{props.ingr5}</li>
            <li>{props.ingr6}</li>
            <li>{props.ingr7}</li>
          </ul>
          <h3>Instructions: </h3>
          <div>{props.strInstructions}</div>
        </div>
      </div>
      <Link to="/">Back to cocktails</Link>
    </div>
  );
};

export default Details;

// {
//   img,
//   drink,
//   alcohol,
//   glass,
//   ingredient1,
//   ingredient2,
//   ingredient3,
//   ingredient4,
//   ingredient5,
//   ingredient6,
//   ingredient7,
//   instructions,
// }
