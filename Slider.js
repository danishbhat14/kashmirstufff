import React, { useState, useEffect } from 'react';
import sliderImage1 from './Slider1.jpg';
import sliderImage2 from './Slider2.jpeg';
import sliderImage3 from './Slider3.jpeg';
import sliderImage4 from './Slider4.jpeg';
import sliderImage5 from './Slider5.jpeg';
import sliderImage6 from './Slider6.jpeg';
import sliderImage7 from './Slider7.jpeg';
import sliderImage8 from './Slider8.jpeg';

import cn from 'classnames';

const images = [
  sliderImage1,
  sliderImage2,
  sliderImage3,
  sliderImage4,
  sliderImage5,
  sliderImage6,
  sliderImage7,
  sliderImage8,
];

const Carousel = () => {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSetIndex((currentSetIndex) => (currentSetIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const renderCarouselItems = () => {
    const items = [];

    const startIndex = currentSetIndex % images.length;
    const endIndex = (currentSetIndex + 3) % images.length;

    if (startIndex <= endIndex) {
      for (let i = startIndex; i <= endIndex; i++) {
        items.push(
          <div key={i} className={cn('carousel-item', 'w-1/4', 'p-4')}>
            <img src={images[i]} alt={`Imag ${i + 1}`} className="w-72 h-72" />
          </div>
        );
      }
    } else {
      for (let i = startIndex; i < images.length; i++) {
        items.push(
          <div key={i} className={cn('carousel-item', 'w-1/4', 'p-4')}>
            <img src={images[i]} alt={`Images ${i + 1}`} className="w-72 h-72" />
          </div>
        );
      }

      for (let i = 0; i <= endIndex; i++) {
        items.push(
          <div key={i} className={cn('carousel-item', 'w-1/4', 'p-4')}>
            <img src={images[i]} alt={`Images ${i + 1}`} className="w-72 h-72" />
          </div>
        );
      }
    }

    return items;
  };

  const renderCarousel = () => {
    return <div className="carousel flex bg-gray-200">{renderCarouselItems()}</div>;
  };

  return windowWidth >= 768 ? renderCarousel() : null;
};

export default Carousel;
