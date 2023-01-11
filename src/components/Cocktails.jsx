import React from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import "../../src/index.css"

const Cocktails = ({ cocktails, paginate, currentPage, cocktailPerPage, pageNumbers }) => {
  return (
    <div className="cocktail-main">


      <div className="cocktails-wrapper">
        {cocktails.length !== 0 ? cocktails.map((cocktail) => {
          return (
            <div className="cocktail" key={cocktail.idDrink}>
              <div className="cocktail-img">
                <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
              </div>

              <div className="cocktail-details">
                <h3>
                  {cocktail.strDrink.length < 20
                    ? `${cocktail.strDrink}`
                    : `${cocktail.strDrink.substring(0, 25)}...`}
                </h3>
                <small>{cocktail.strAlcoholic}</small>
                <Link to={`/${cocktail.strDrink}`}>View Details</Link>
              </div>
            </div>
          );
        }) : <Loader />}

      </div> {/* pagination */}
      <div className="pagination">
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1 ? true : false}>Prev</button>
        <ul>
          {pageNumbers.map((number) => {
            return (
              <li
                key={number}
                onClick={() => paginate(number)}
                className={currentPage === number ? "active" : ""}
              >
                {number}
              </li>
            );
          })}
        </ul>
        <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === pageNumbers.length ? true : false}>Next</button>
      </div>
    </div>
  );
};

export default Cocktails;
