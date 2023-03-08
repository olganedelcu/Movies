import React, { useState, useEffect } from 'react';


const MovieCard = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://www.omdbapi.com/?s=Batman&page=2&apikey=350bc702"
      );
      const json = await response.json();
      setMovies(json.Search);
      setIsLoading(false);
      // console.log(json.Search);
      console.log(json.Search.Title)
    };

    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        movies.map((movie) => (
          <div key={movie.imdbID}>
            <h2  >
              {movie.Title} - {movie.Year}
            </h2>
          </div>
        ))
      )}
    </div>
  );
};

export default MovieCard;
