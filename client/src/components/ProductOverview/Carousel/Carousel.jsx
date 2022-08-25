import React, { useState } from 'react';
import carouselstyles from './Carousel.module.css';

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sampleSlides = [
    {url: 'https://via.placeholder.com/475x500', title: 'placeholder'},
    {url: 'https://via.placeholder.com/475x500', title: 'placeholder'},
    {url: 'https://via.placeholder.com/475x500', title: 'placeholder'},
    {url: 'https://via.placeholder.com/475x500', title: 'placeholder'},
    {url: 'https://via.placeholder.com/475x500', title: 'placeholder'}
  ];

  const slideStyles = {
    backgroundImage: `url(${slides[currentIndex].url})`
  }

  return (
    <div
    className={carouselstyles.imagegallery}
    slides={sampleSlides}
    >
    </div>
  );
}