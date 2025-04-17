import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import SearchIcon from "./icons8-search.gif";

import "./App.css";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=49501731";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("superman"); // Fetch Superman movies on load
  }, []);

  const searchMovies = async (query) => {
    const url = `${API_URL}&s=${query}`; // Always search by name
    const response = await fetch(url);
    const data = await response.json();

    setMovies(data.Search || []); // Handle cases where no movies are found
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;