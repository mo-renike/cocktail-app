import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const style = {
    margin: "4rem auto",
    color: "inherit",
    textAlign: "center",
  };
  return (
    <div className="cocktail-details">
      <h1 style={style}>Oops...<br /> Sorry, I have searched tirelessly, <br/> but that Page cannot be Found <br/> (-_-)</h1>
      <Link to="/">Back to Homepage</Link>
    </div>
  );
};

export default NotFound;
