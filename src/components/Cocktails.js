import React from "react";
import Cocktail from "./Cocktail";
import { useState, useEffect } from "react";

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
          drink={cocktail.strDrink}
          img={cocktail.strDrinkThumb}
          ingredients={
            (cocktail.strIngrdient1,
            cocktail.strIngrdient2,
            cocktail.strIngrdient3,
            cocktail.strIngrdient4,
            cocktail.strIngrdient5,
            cocktail.strIngrdient6,
            cocktail.strIngrdient7)
          }
        />
      ))}
    </div>
  );
};

export default Cocktails;
