import React, { useState, useEffect } from 'react';
import carouselstyles from './Carousel.module.css';

export default function Carousel(props) {
  const [productStyles, setProductStyles] = useState('');

  const { productId, axiosConfig } = props;

  useEffect(() => {
    axiosConfig.get(`/products/${productId}/styles`)
      .then((response) => {

      })
  });

  const imageGallery = {
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url(https://via.placeholder.com/400x600)',
  };

  return (
    <div className={carouselstyles.imageGallery} style={imageGallery}>
      {/* <img className={carouselstyles.currentImage} src="https://via.placeholder.com/400x600" /> */}
      <div className={carouselstyles.thumbnailRow}>
        {/* Map over all images pulled from API */}
        <div className={carouselstyles.thumbnail} />
        <div className={carouselstyles.thumbnail} />
        <div className={carouselstyles.thumbnail} />
        <div className={carouselstyles.thumbnail} />
        <div className={carouselstyles.thumbnail} />
        <div className={carouselstyles.thumbnail} />
        <div className={carouselstyles.thumbnail} />
        <div className={carouselstyles.thumbnail} />
        <div className={carouselstyles.thumbnail} />
        <div className={carouselstyles.goToNext}>▼</div>
      </div>
      <div className={carouselstyles.arrows}>
        <div className={carouselstyles.leftArrow}>❮</div>
        <div className={carouselstyles.rightArrow}>❯</div>
      </div>
      <div className={carouselstyles.lightbox} />
    </div>
  );
}
