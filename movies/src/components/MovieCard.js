import React, { useState, useEffect } from "react";

const MovieCard = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
        setIsLoading(true);
        const response = await fetch("http://www.omdbapi.com/?s=Batman&page=2&apikey=350bc702");
        const data = await response.json();
        setMovies(data.Search);
        setIsLoading(false);
    }   catch (error) {
        console.log(error);
        setIsLoading(false);
    }
  };
  
  useEffect(() => {
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
            <h2>
              {movie.Title} - {movie.Year}
            </h2>
          </div>
        ))
      )}
    </div>
  );
};

export default MovieCard;
