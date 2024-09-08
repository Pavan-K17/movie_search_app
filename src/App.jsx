import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import MyList from './components/MyList'; // Import the Search component
import MovieDetails from './components/MovieDetails'; // Import the MovieDetails component

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home with Search & Grid */}
          <Route path="/movie/:id" element={<MovieDetails />} /> {/* Movie Details */}
          <Route path="/mylist" element={<MyList />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App
