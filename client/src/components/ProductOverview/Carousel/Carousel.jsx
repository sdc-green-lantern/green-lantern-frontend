import React, { useState, useEffect } from 'react';
import axiosConfig from '../../../../../axiosConfig.js';
import carouselstyles from './Carousel.module.css';

export default function Carousel() {
  const [productImages, setProductImages] = useState([]);

  useEffect(() => {
    axiosConfig.get('/products/65633/styles')
      .then((response) => {
        const result = response.data.results;
        console.log(result);
        setProductImages(result);
        console.log('products... ', products);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const imageGallery = {
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url(https://via.placeholder.com/400x600)',
  };

  const thumbnails = {
    cursor: 'pointer',
    border: '1px solid red',
    height: '50px',
    width: '50px',
    margin: '25px auto',
    // backgroundImage: `${productImage.photos.thumbnail_url}`,
  };

  return (
    <div className={carouselstyles.imageGallery} style={imageGallery}>
      <div className={carouselstyles.thumbnailRow}>
        {productImages.map((productImage) => (
          <div url={productImage.photos} style={thumbnails} />
        ))}
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
