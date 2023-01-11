import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const Details = () => {
  const [cocktail, setCocktail] = useState([]);
  const [videos, setVideos] = useState([]);

  // use params
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const request = `https://cocktails1.p.rapidapi.com/search.php?s=${id}`;
      const configuration = {
        method: "GET",
        headers: {
          "x-rapidapi-host": "cocktails1.p.rapidapi.com",
          "x-rapidapi-key":
            "b5955c940amsh9ba067ff07dbc5ap17f2abjsn2acd75e2d6af",
        },
      };

      const resp = await fetch(request, configuration);
      const result = await resp.json();
      const dets = result.drinks[0];
      setCocktail(dets);
    };
    fetchData();

    const getVideos = async () => {
      const api = `https://youtube-search-and-download.p.rapidapi.com/search?query=howtomake${id}cocktail`;
      const config = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "b5955c940amsh9ba067ff07dbc5ap17f2abjsn2acd75e2d6af",
          "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
        },
      };

      const resp = await fetch(api, config);
      const data = await resp.json();
      setVideos(data.contents);
      console.log(videos);
    };
    getVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (

    <div className="details-wrapper">
      <div className="abs"></div>
      <div className="back">
        {" "}
        <Link to="/">Back</Link>
      </div>
      <h1>{cocktail.strDrink}</h1> <br />
      {cocktail.length !== 0 ? (
        <div className="details">
          <div className="details-img">
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
          </div>

          <div className="details-info">
            <p>Drink type: {cocktail.strAlcoholic} </p>
            <p>Glass Type: {cocktail.strGlass} </p>
            <h2>Instructions: </h2>
            <p>{cocktail.strInstructions}</p>
            <h2>Ingredients: </h2>
            <p>{cocktail.strIngredient1}</p>
            <p>{cocktail.strIngredient2}</p>
            <p>{cocktail.strIngredient3}</p>
            <p>{cocktail.strIngredient4}</p>
            <p>{cocktail.strIngredient5}</p>
            <p>{cocktail.strIngredient6}</p>
            <p>{cocktail.strIngredient7}</p>
          </div>
        </div>
      ) : <Loader />}
      <div className="videos">
        <h1>How to make {id} </h1>
        {videos.length !== 0 ? videos.slice(0, 4).map((video) => {
          return (
            <iframe
              key={video.video.videoId}
              width="560"
              height="315"
              src={video.video.videoId ? `https://www.youtube.com/embed/${video.video.videoId}` : "https://www.youtube.com/embed/IRkM8jsG-hY"}
              title={video.video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

          );
        }) : <Loader />}
      </div>

    </div>
  );
};

export default Details;
