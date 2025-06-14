import React, { useState } from 'react';
import BookingStep1 from '../components/BookingStep1';
import BookingStep2 from '../components/BookingStep2';
import BookingStep3 from '../components/BookingStep3';

export default function Booking() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    transportMode: '',
    pickup: '',
    destination: '',
    date: '',
    time: '',
  });

  const handleNext = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
    setStep((prev) => prev + 1);
  };

  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    // you’ll connect Firebase here later
    console.log('Submit to Firebase:', formData);
  };

  return (
    <div className="text-white bg-black min-h-screen p-8">
      <h1 className="text-3xl text-gold font-semibold mb-6">Booking Page</h1>
      {step === 1 && <BookingStep1 onNext={handleNext} />}
      {step === 2 && <BookingStep2 onNext={handleNext} onBack={handleBack} />}
      {step === 3 && (
        <BookingStep3 formData={formData} onBack={handleBack} onSubmit={handleSubmit} />
      )}
    </div>
  );
}
