import React from 'react';
import carouselstyles from './Carousel.module.css';

export default function Carousel() {
  return (
    <div className={carouselstyles.imagegallery}>
      <div className={carouselstyles.thumbnailrow}>
        {/* Map over all images pulled from API */}
        thumbnails
      </div>
      <div className={carouselstyles.arrows}>
        <div className={carouselstyles.leftarrow}>❮</div>
        <div className={carouselstyles.rightarrow}>❯</div>
      </div>
    </div>
  );
}
