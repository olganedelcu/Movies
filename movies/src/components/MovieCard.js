import React, {useState, useEffect} from 'react';

const MovieCard = () => {
    const [movies, setMovies] = useState([]);
   
  useEffect(() => {
    fetch("http://www.omdbapi.com/?s=Batman&page=2&apikey=350bc702")
    .then((res) => res.json())
    .then((data) => setMovies(data));
}, []);


    return (
    <div>
        {movies.map(((movie) => (
            <div>
                <h2>{movie.title} - {movie.year}</h2>
            </div>
        )))}
    </div>
    )
}

export default MovieCard;