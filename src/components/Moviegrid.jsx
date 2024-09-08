import React, { useEffect, useState } from 'react';
import '../styles/Moviegrid.css'; // CSS for styling

const Moviegrid = () => {
  const [movies, setMovies] = useState([]); // State to store movies
  const apiKey = '89567f52ff744e2f2ed51a0d92192508';

  // Fetch movies (this example fetches popular movies)
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
        );
        const data = await response.json();
        setMovies(data.results); // Store fetched movies in state
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
    <div className='head2'>
    <h1>LATEST MOVIES</h1>
    </div>
    <div className="movie-grid">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="movie-poster"
          />
          <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Moviegrid;
