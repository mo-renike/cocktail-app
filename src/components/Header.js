import React from "react";

const Header = (props) => {
  console.log(props);
  return (
    <div className="container header">
      <h1>
        Cocktaily
        <br /> <br />
        <small>Hit me with your best shot 🍸 😉</small>
      </h1>
      <form onSubmit={props.search}>
        <input
          type="search"
          placeholder="Start typing..."
          value={props.cocktailName}
          onChange={props.setSearch}
        />
      </form>
    </div>
  );
};

export default Header;
