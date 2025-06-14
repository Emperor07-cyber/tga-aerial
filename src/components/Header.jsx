import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo">TGA</div>
      <nav>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <Link to="/booking">Booking</Link>
        <a href="#gallery">Gallery</a>
        <a href="#about">About</a>
      </nav>
    </header>
  );
};

export default Header;
