import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.jpeg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo"><img src={logo} alt="logo" /></div>
      
      <Link to="/" className="navbar-center">
      Home</Link>

      <Link to="/mylist" className='navbar-right'><button className="mylist-btn">My List</button></Link>
    
    </nav>
  );
};

export default Navbar;

