// components/BookingStep1.jsx
import React from 'react';

export default function BookingStep1({ serviceType, setServiceType, onNext }) {
  const options = ['Helicopter', 'Private Jet', 'SUV', 'All'];

  return (
    <div className="booking-step p-6 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center text-gold">Select Service Type</h2>
      <div className="flex flex-col gap-3">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => setServiceType(option)}
            className={`border-2 rounded px-4 py-2 font-medium transition ${
              serviceType === option
                ? 'bg-gold text-white border-gold'
                : 'border-gold text-gold'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={onNext}
          disabled={!serviceType}
          className="hero-button disabled:opacity-50"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
