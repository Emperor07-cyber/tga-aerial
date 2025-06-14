import React from 'react';
import lux1 from '../assets/images/lux1.jpg';
import lux2 from '../assets/images/lux2.jpg';
import lux3 from '../assets/images/lux3.jpg';

const images = [lux1, lux2, lux3];


import { useEffect, useState } from 'react';

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${images[current]})` }}
    >
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>Your Premium Transport Solution</h1>
        <button className="hero-button">Book Now</button>
      </div>
    </div>
  );
}