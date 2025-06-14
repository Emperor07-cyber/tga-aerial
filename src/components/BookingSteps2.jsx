// components/BookingStep2.jsx
import React from 'react';

export default function BookingStep2({ formData, setFormData, onNext, onBack }) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="booking-step p-6 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center text-gold">Trip Details</h2>
      
      <form className="flex flex-col gap-4">
        <input
          type="text"
          name="pickup"
          placeholder="Pickup Location"
          value={formData.pickup}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="destination"
          placeholder="Destination"
          value={formData.destination}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="input-field"
        />

        <div className="flex justify-between mt-6">
          <button onClick={onBack} type="button" className="hero-button">Back</button>
          <button onClick={onNext} type="button" className="hero-button">Continue</button>
        </div>
      </form>
    </div>
  );
}
