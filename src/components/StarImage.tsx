// StarImage.tsx
import React from 'react';
import starImage from '../images/star.jpg';

function StarImage() {
  return (
    <img src={starImage} alt="Estrella" width="1000" height="500" style={{ maxWidth: '100%', maxHeight: '100%', display: 'block', margin: '0 auto' }} />
  );
}

export default StarImage;
