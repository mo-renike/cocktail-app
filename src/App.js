import Header from "./components/Header";
import Cocktail from "./components/Cocktail";
import { useState } from "react";
import Details from "./components/Details";

function App() {
  const [cocktails, setCocktails] = useState([]);
  const [cocktailName, setCockTailName] = useState("");

  // useEffect(() => {
  //   getCocktail();
  // }, [cocktailName]);

  const getCocktail = async (e) => {
    const cocktailName = e.target.elements.cocktailName.value;
    e.preventDefault();

    const api = `https://cocktails1.p.rapidapi.com/search.php?s=${cocktailName}`;
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
  };

  return (
    <div className="App">
      <Header getCocktail={getCocktail} />

      <div className="cocktails-wrapper">
        {cocktails.map((cocktail) => (
          <Cocktail
            key={cocktail.strDrink}
            alcohol={cocktail.strAlcoholic}
            name={cocktail.strDrink}
            glass={cocktail.strGlass}
            img={cocktail.strDrinkThumb}
          />
        ))}
      </div>
      <Details
        alcohol={cocktails.strAlcoholic}
        name={cocktails.strDrink}
        glass={cocktails.strGlass}
        img={cocktails.strDrinkThumb}
        how={cocktails.strInstructions}
        ingr1={cocktails.strIngredient1}
        ingr2={cocktails.strIngredient2}
        ingr3={cocktails.strIngredient3}
        ingr4={cocktails.strIngredient4}
        ingr5={cocktails.strIngredient5}
        ingr6={cocktails.strIngredient6}
        ingr7={cocktails.strIngredient7}
      />
    </div>
  );
}

export default App;
