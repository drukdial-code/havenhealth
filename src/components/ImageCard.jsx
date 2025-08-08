
import React from 'react';

function ImageCard({ title, imageUrl, description }) {
  return (
    <div className="image-card">
      <h2 className="image-card-title">{title}</h2>
      <div className="image-container">
        <img 
          src={imageUrl} 
          alt={title} 
          className="image-card-img"
        />
      </div>
      <p className="image-card-description">{description}</p>
    </div>
  );
}

export default ImageCard;