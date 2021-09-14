import React from "react";

const Header = (props) => {
  return (
    <div className="container header">
      <h3>
        Cocktaily
        <br /> <br />
        <small>Hit me with your best shot 🍸 😉</small>
      </h3>
      <form onSubmit={props.getCocktail}>
        <input
          type="search"
          placeholder="Start typing..."
          name="cocktailName"
        />
      </form>
    </div>
  );
};

export default Header;
