import Header from "./components/Header";
import Cocktails from "./components/Cocktails";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";

function App() {
  const [cocktails, setCocktails] = useState([]);
  const [cocktailName, setCockTailName] = useState("");

  useEffect(() => {
    getCocktail();
  }, []);

  const getCocktail = async () => {
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

  const search = (e) => {
    e.preventDefault();
    getCocktail(e)
  };

  const setSearch = (e) => {
    setCockTailName(e.target.value);
  };

  return (
    <div className="App">
      <Header search={search} setSearch={setSearch} />
      <Loader />
      <Cocktails cocktails={cocktails} />
    </div>
  );
}

export default App;
