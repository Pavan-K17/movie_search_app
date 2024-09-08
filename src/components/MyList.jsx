import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/MyList.css';

const MyList = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFromFavorites = (id) => {
    const updatedFavorites = favorites.filter((movie) => movie.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    alert('Movie removed from your favorites!');
  };


  if (favorites.length === 0) {
    return <p>Your favorite list is empty.</p>;
  }

  return (
    <div className="mylist">
      <h1>My Favorite Movies</h1>
      <div className="favorites-grid">
        {favorites.map((movie) => (
          <div key={movie.id} className="favorite-item">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.rating}</p>
            <Link to={`/movie/${movie.id}`}>View Details</Link> {/* Link to movie details */}
            <button onClick={() => removeFromFavorites(movie.id)} className="delete-btn">
              Delete
            </button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default MyList;
