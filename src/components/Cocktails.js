import React from "react";
import Cocktail from "./Cocktail";
import { useState, useEffect } from "react";
import { Link   } from "react-router-dom";

const Cocktails = () => {
  const [cocktails, setCocktails] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getCocktail();
  }, [query]);

  const getCocktail = async () => {
    const api = "https://cocktails1.p.rapidapi.com/search.php?s=margarita";
    const config = {
      method: "GET",
      headers: {
        "x-rapidapi-host": "cocktails1.p.rapidapi.com",
        "x-rapidapi-key": "b5955c940amsh9ba067ff07dbc5ap17f2abjsn2acd75e2d6af",
      },
    };

    const resp = await fetch(api, config);
    const data = await resp.json();
    setCocktails(data.drinks);
    console.log(data.drinks);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="cocktails">
      {cocktails.map((cocktail) => (
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
