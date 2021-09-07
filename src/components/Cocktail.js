import React from "react";

const Cocktail = () => {
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
    console.log(data.drinks);
  };
  getCocktail();

  return <div></div>;
};

export default Cocktail;
