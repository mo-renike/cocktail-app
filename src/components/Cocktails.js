import React from "react";
import { Link } from "react-router-dom";

const Cocktails = (props) => {
  return (
    <div className="cocktails-wrapper">
      {props.cocktails.map((cocktail) => {
        return (
          <div className="cocktail" key={cocktail.idDrink}>
            <div className="cocktail-img">      
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            </div>
      
            <div className="cocktail-details">
              <h3>
                {cocktail.strDrink.length < 20
                  ? `${cocktail.strDrink}`
                  : `${cocktail.strDrink.substring(0, 25)}...`}
              </h3>
              <small>{cocktail.strAlcoholic}</small>
              <Link
                to={{
                  pathname: `/details/${cocktail.strDrink}`,
                  state: { detail: cocktail.strDrink },
                }}
              >
                View Details
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cocktails;
