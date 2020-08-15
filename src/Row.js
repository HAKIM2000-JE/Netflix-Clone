import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const URL_base = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, islargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    //  []: run one when the row is loads , and don't run again
    // [movie] : run everytime when the movie changed
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // we got that BaseUrl "https://api.themoviedb.org/3"
      setMovies(request.data.results);
      //   console.log(Row);
      return request;
      //Every Variable used in the useEffect should be declared in the array bellow
    }
    fetchData();
  }, [fetchUrl]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      //
      autoplay: 1,
    },
  };
  const handclick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          //We need to extart id from each youtube URL (the last part)
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => alert(error));
    }
  };
  console.log(movies);
  return (
    <div className="row">
      {/* title */}
      <h1 className="title">{title}</h1>
      {/* container-->posters */}
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster  ${islargeRow && "row_large"}`}
            src={`${URL_base}${
              islargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={() => handclick(movie)}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
