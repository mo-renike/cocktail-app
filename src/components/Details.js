import React, { Component } from "react";
import { Link } from "react-router-dom";

class Details extends Component {
  state = {
    activeCocktail: [],
  };

  componentDidMount = async () => {
    const title = this.props.location.state.detail;

    const request = `https://cocktails1.p.rapidapi.com/search.php?s=${title}`;
    const configuration = {
      method: "GET",
      headers: {
        "x-rapidapi-host": "cocktails1.p.rapidapi.com",
        "x-rapidapi-key": "b5955c940amsh9ba067ff07dbc5ap17f2abjsn2acd75e2d6af",
      },
    };

    const resp = await fetch(request, configuration);
    const result = await resp.json();
    const dets = result.drinks[0];
    this.setState({ activeCocktail: dets });
  };
  render() {
    const dets = this.state.activeCocktail;

    return (
      <div className="details-wrapper">
        <h2>{dets.strDrink}</h2> <br />
        {dets.length !== 0 && (
          <div className="details">
            <div className="details-img">
              <img src={dets.strDrinkThumb} alt={dets.strDrink} />
            </div>

            <div className="details-info">
              <p>Drink type: {dets.strAlcoholic} </p>
              <p>Glass Type: {dets.strGlass} </p>
              <h3>Instructions: </h3>
              <p>{dets.strInstructions}</p>
              <h3>Ingredients: </h3>
              <p>{dets.strIngredient1}</p>
              <p>{dets.strIngredient2}</p>
              <p>{dets.strIngredient3}</p>
              <p>{dets.strIngredient4}</p>
              <p>{dets.strIngredient5}</p>
              <p>{dets.strIngredient6}</p>
              <p>{dets.strIngredient7}</p>
            </div>
          </div>
        )}
        <Link to="/">Back</Link>
      </div>
    );
  }
}

export default Details;
