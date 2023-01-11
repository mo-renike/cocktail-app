import React from "react";

const Header = ({ search, setSearch, cocktailName }) => {



  return (
    <div className="header" ><h1>Cocktaily </h1>
      <p>Hit me with your best shot 🍸</p>

      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search cocktail by name..."
          value={cocktailName}
          onChange={setSearch}
        />
      </form>

    </div>

  );
};

export default Header;
