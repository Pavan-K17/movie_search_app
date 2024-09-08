import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/MovieDetails.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const apiKey = '89567f52ff744e2f2ed51a0d92192508';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=credits`
      );
      const data = await response.json();
      setMovie(data);
    };
    fetchMovieDetails();
  }, [id]);

  const addToFavorites = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const movieData = {
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      rating: movie.vote_average,
    };
    
    // Check if movie is already in favorites
    const isAlreadyFavorite = favorites.some(fav => fav.id === movieData.id);
    
    if (!isAlreadyFavorite) {
      favorites.push(movieData);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      alert(`${movie.title} has been added to your favorites!`);
    } else {
      alert(`${movie.title} is already in your favorites!`);
    }
  };

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div className="movie-details">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movie-info">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <p><strong>Release Date:</strong> {movie.release_date}</p>
        <p><strong>Genres:</strong> {movie.genres.map((genre) => genre.name).join(', ')}</p>
        <p><strong>Rating:</strong> {movie.vote_average}</p>
        <p><strong>Cast:</strong> {movie.credits.cast.slice(0, 5).map(actor => actor.name).join(', ')}</p>
        
        {/* Add to Favorites Button */}
        <button onClick={addToFavorites}>Add to MyList</button>
      </div>
    </div>
  );
};

export default MovieDetails;
