import React from "react";
import Cocktail from "./Cocktail";

const Main = () => {
  return (
    <div className="containerFluid main">
      <h2>Cocktails</h2>
      <div className="cocktails">
        <Cocktail />
      </div>
    </div>
  );
};

export default Main;
