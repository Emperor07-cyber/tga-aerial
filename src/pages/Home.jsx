import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import { FaHelicopter, FaPlane, FaCar } from 'react-icons/fa';

// Import images correctly
import helicopterImg from '../assets/images/lux1.jpg';
import jetImg from '../assets/images/lux2.jpg';
import suvImg from '../assets/images/lux3.jpg';
import aboutImage from '../assets/images/lux4.jpg';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="services-container" aria-label="Services">

          <ServiceCard icon={<FaHelicopter />} label="Book Helicopter" style={{ backgroundImage: `url(${helicopterImg})` }} />
          <ServiceCard icon={<FaPlane />} label="Book Private Jet" style={{ backgroundImage: `url(${jetImg})` }} />
          <ServiceCard icon={<FaCar />} label="Book SUV" style={{ backgroundImage: `url(${suvImg})` }} />

        </section>
        <section className="about-us" id="about">
          
          <div className="about-us-text">
            <h2>About Us</h2>
          <p>
            We provide the best luxury air transport services in Africa. Our fleet includes helicopters, private jets, and SUVs to cater to all your travel needs.
          </p>
          </div>
          <div className="about-image">
            <img className="about-image" src={aboutImage} alt="Luxury Transport" />

          </div>
        </section>
        <section className="contact-us" id="contact">
          <h2>Contact Us</h2>
          <p>If you have any questions or would like to make a booking, please contact us.</p>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
