import React, { useState, useEffect } from "react";

const MovieCard = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (controller) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "http://www.omdbapi.com/?s=Batman&page=2&apikey=350bc702",
        { signal: controller.signal }
      );
      const data = await response.json();
      setMovies(data.Search);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    const timer = setTimeout(() => {
      fetchData(controller); // passing controller to our fetchData function
    }, 2000);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
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
