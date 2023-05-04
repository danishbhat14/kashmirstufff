import React, { useState, useEffect } from 'react';

const images = [
  'https://source.unsplash.com/random/800x600',
  'https://source.unsplash.com/random/800x600',
  'https://source.unsplash.com/random/800x600',
];

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <img className='w-screen h-96 pt-3' src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
    </div>
  );
};

export default ImageSlider;
