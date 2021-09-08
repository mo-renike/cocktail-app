import React from "react";

const Header = ({ getSearch, search, updateSearch }) => {
  return (
    <div className="container header">
      <h3>
        Cocktail Search App <br /> <br />
        <small>Search and get details of Your favourite Cocktails</small>
      </h3>
      <form onnSubmit={getSearch}>
        <input type="search" placeholder="Search..." value={search} />
      </form>
    </div>
  );
};

export default Header;
