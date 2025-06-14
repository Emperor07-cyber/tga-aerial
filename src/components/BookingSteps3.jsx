// components/BookingStep3.jsx
import React from 'react';

export default function BookingStep3({ formData, onBack, onSubmit }) {
  return (
    <div className="booking-step p-6 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center text-gold">Review Your Booking</h2>
      
      <div className="text-left text-gold space-y-2 mb-6">
        <p><strong>Transport Mode:</strong> {formData.transportMode}</p>
        <p><strong>Pickup:</strong> {formData.pickup}</p>
        <p><strong>Destination:</strong> {formData.destination}</p>
        <p><strong>Date:</strong> {formData.date}</p>
        <p><strong>Time:</strong> {formData.time}</p>
      </div>

      <div className="flex justify-between">
        <button onClick={onBack} className="hero-button">Back</button>
        <button onClick={onSubmit} className="hero-button bg-gold text-white">Submit</button>
      </div>
    </div>
  );
}
// This component allows users to review their booking details before submission.