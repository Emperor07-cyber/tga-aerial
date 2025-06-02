import React from 'react';

const ServiceCard = ({ icon, label, style }) => {
  return (
    <div
      className="service-card"
      role="button"
      tabIndex={0}
      aria-label={label}
      style={style}
    >
      <div className="service-icon">{icon}</div>
      <div className="service-label">{label}</div>
    </div>
  );
};

export default ServiceCard;
// Note: Ensure that the CSS for .service-card, .service-icon, and .service-label is defined in your stylesheets to style the card appropriately.