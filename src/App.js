import Header from "./components/Header";
import Cocktails from "./components/Cocktails";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "./components/Details";
import NotFound from "./components/NotFound";

function App() {
  const [cocktails, setCocktails] = useState([]);
  // const [cocktailName, setCockTailName] = useState("");

  // useEffect(() => {
  //   getCocktail();
  // }, []);

  // state = {
  //   cocktails = []
  // }

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
    setCocktails({ cocktails: data.cocktails });
    console.log(cocktails);
    console.log(cocktailName);
  };

  return (
    <Router basename="/cocktails">
      <div className="App">
        <Header getCocktail={getCocktail} />
        <Switch>
          <Route path="/" exact>
            <Cocktails getCocktail={getCocktail} />
          </Route>
          <Route path="/details/">
            <Details getCocktail={getCocktail} />
          </Route>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
