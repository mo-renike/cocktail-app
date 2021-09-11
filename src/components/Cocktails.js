import React from "react";
import Cocktail from "./Cocktail";

const Cocktails = (props) => {
  return (
    <div className="cocktails">
      {props.cocktails.map((cocktail) => (
        <Cocktail
          alcohol={cocktail.strAlcoholic}
          key={cocktail.idDrink}
          glass={cocktail.strGlass}
          drink={cocktail.strDrink}
          img={cocktail.strDrinkThumb}
          ingredient1={cocktail.strIngrdient1}
          ingredient2={cocktail.strIngrdient2}
          ingredient3={cocktail.strIngrdient3}
          ingredient4={cocktail.strIngrdient4}
          ingredient5={cocktail.strIngrdient5}
          ingredient6={cocktail.strIngrdient6}
          ingredient7={cocktail.strIngrdient7}
          instructions={cocktail.strInstructions}
        />
      ))}
    </div>
  );
};

export default Cocktails;
