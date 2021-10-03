import React from "react";

const Header = (props) => {
  console.log(props);
  return (
    <div className="container header">
      <h1>Cocktaily </h1>
      <p>Hit me with your best shot 🍸</p>

      <form onSubmit={props.search}>
        <input
          type="search"
          placeholder="Search cocktail by name..."
          value={props.cocktailName}
          onChange={props.setSearch}
        />
      </form>
    </div>
  );
};

export default Header;
