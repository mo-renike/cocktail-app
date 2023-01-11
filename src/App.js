import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Cocktails from "./components/Cocktails";
import Details from "./components/Details";
import NotFound from "./components/NotFound";
import "./index.css";
// import Loader from "./components/Loader";

function App() {
  const [cocktails, setCocktails] = useState([]);
  const [cocktailName, setCockTailName] = useState("");

  // set dynamiccocktailsPerPage value according to screen size
  if (window.innerWidth <= 768) {
    var dynamicPerPage = 4;
  } else {
    dynamicPerPage = 8;
  }
  // implement pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [cocktailsPerPage] = useState(dynamicPerPage);
  const indexOfLastCocktail = currentPage * cocktailsPerPage;
  const indexOfFirstCocktail = indexOfLastCocktail - cocktailsPerPage;
  const currentcocktails = cocktails
    ? cocktails.slice(indexOfFirstCocktail, indexOfLastCocktail)
    : [];

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // calculate page numbers

  let pageNumbers = [];
  // if no cocktails found, set pageNumbers to 1
  if (!cocktails) {
    pageNumbers = [1];
  }
  for (let i = 1; i <= Math.ceil(cocktails.length / cocktailsPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    getCocktail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    getCocktail(e);
  };

  const setSearch = (e) => {
    setCockTailName(e.target.value);
  };

  return (
    <div className="App">
      <Header
        search={search}
        cocktailName={cocktailName}
        setSearch={setSearch}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Cocktails
              cocktails={currentcocktails}
              paginate={paginate}
              cocktailsPerPage={cocktailsPerPage}
              pageNumbers={pageNumbers}
              currentPage={currentPage}
            />
          }
        />
        <Route path="/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
