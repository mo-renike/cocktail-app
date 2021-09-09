import React from "react";

const Header = ({ getSearch, search, updateSearch }) => {
  return (
    <div className="container header">
      <h3>
        Cocktaily
        <br /> <br />
        <small>Hit me with your best shot 🍸 😉</small>
      </h3>
      <form onnSubmit={getSearch}>
        <input type="search" placeholder="Search..." value={search} />
      </form>
    </div>
  );
};

export default Header;
