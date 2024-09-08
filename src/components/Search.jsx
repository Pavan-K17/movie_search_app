import React, { useEffect, useState } from 'react';
import "../styles/Search.css"
import icon from "../assets/search.png"

const Search = () => {
  const [movies, setMovies] = useState([]); // State to store fetched movies based on search
  const [searchTerm, setSearchTerm] = useState(''); // State to store the search term
  const [loading, setLoading] = useState(false); // State to indicate if data is being loaded
  const apiKey = '89567f52ff744e2f2ed51a0d92192508';

  // Fetch movies based on the search term
  const fetchMovies = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
      );
      const data = await response.json();
      setMovies(data.results); // Store the fetched movies
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
    setLoading(false);
  };

  // Debouncing function to limit API calls
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm.trim()) {
        fetchMovies(searchTerm); // Fetch movies only when search term is not empty
      }
    }, 500); // Delay of 500ms

    return () => clearTimeout(delayDebounceFn); // Cleanup timeout
  }, [searchTerm]); // Re-run effect when searchTerm changes

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='search-box'>
      <div className='search-bar'>

      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
  
      </div>
      

      <div className="search-results">
        {loading ? (
          <p>Loading movies...</p>
        ) : (
          movies.length > 0 ? (
            movies.map((movie) => (
              <div key={movie.id} className="movie-item">
                <a href={`/movie/${movie.id}`}>
                <div>
                <h2>{movie.title}</h2>
                <p>Release Date: {movie.release_date}</p>
                </div>
                </a>
                <br></br>
              </div>
            ))
          ) : searchTerm.trim() !== '' ? (
            <p>No movies found for "{searchTerm}"</p>
          ) : (
            <p>Type a title to search for movies</p>
          )
        )}
      </div>
    </div>
  );
};

export default Search;
