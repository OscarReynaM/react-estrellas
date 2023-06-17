// StarVideos.tsx
import React from 'react';

function StarVideos() {
  return (
    <div className="video-container" style={{ position: 'relative', overflow: 'hidden', paddingBottom: '56.25%' }}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/B5unCXpegAw"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Star Video"
        style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
      ></iframe>
    </div>
  );
}

export default StarVideos;
