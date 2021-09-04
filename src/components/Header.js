import React from "react";

const Header = () => {
  return (
    <div className="container header">
      <h3>
        Cocktail Search App
        <small>Search and get details of Your favourite Cocktails</small>
      </h3>
      <form>
        <input type="search" placeholder="Search..." id="search" />
      </form>
    </div>
  );
};

export default Header;
