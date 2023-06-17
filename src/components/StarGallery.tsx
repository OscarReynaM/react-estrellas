// StarGallery.tsx
import React from 'react';
import star1Image from '../images/star1.jpg';
import star2Image from '../images/star2.jpg'; 

const imageStyles = {
  maxWidth: '100%',
  height: 'auto',
};

function StarGallery() {
  return (
    <div className="image-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: '20px' }}>
      <img src={star1Image} alt="Estrella 1" style={imageStyles} />
      <img src={star2Image} alt="Estrella 2" style={imageStyles} />
    </div>
  );
}

export default StarGallery;
