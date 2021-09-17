import Header from "./components/Header";
import Cocktails from "./components/Cocktails";
import { useState, useEffect } from "react";

function App() {
  const [cocktails, setCocktails] = useState([]);
  // eslint-disable-next-line
  const [cocktailName, setCockTailName] = useState("");

  // useEffect(() => {
  //   getCocktail();
  // }, [cocktails]);

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
      <Cocktails cocktails={cocktails} />
    </div>
  );
}

export default App;
