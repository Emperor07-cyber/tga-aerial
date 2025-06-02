import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center text-gold">
        <h1 className="text-xl font-bold">TGA Aerial</h1>
        <button className="bg-gold text-black font-semibold py-2 px-4 rounded hover:bg-yellow-400 transition">
          Make a Request
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
