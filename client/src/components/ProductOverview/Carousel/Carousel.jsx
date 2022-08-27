import React from 'react';
// import axios from 'axios';
import carouselstyles from './Carousel.module.css';

export default function Carousel() {
  const imageGallery = {
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url(https://via.placeholder.com/800x1000)',
  };

  return (
    <div className={carouselstyles.imagegallery} style={imageGallery}>
      <div className={carouselstyles.thumbnailrow}>
        {/* Map over all images pulled from API */}
        <div className={carouselstyles.thumbnail} />
        <div className={carouselstyles.thumbnail} />
        <div className={carouselstyles.thumbnail} />
        <div className={carouselstyles.thumbnail} />
        <div className={carouselstyles.thumbnail} />
      </div>
      <div className={carouselstyles.arrows}>
        <div className={carouselstyles.leftarrow}>❮</div>
        <div className={carouselstyles.rightarrow}>❯</div>
      </div>
      <div className={carouselstyles.lightbox} />
    </div>
  );
}
