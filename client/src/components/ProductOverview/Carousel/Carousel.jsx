import React, { useState, useEffect } from 'react';
import axiosConfig from '../../../../../axiosConfig.js';
import carouselstyles from './Carousel.module.css';

export default function Carousel({ productId }) {
  const [productImages, setProductImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    axiosConfig.get(`/products/${productId}/styles`)
      .then((response) => {
        const result = response.data.results[0].photos;
        setProductImages(result);
        setCurrentImage(result[currentIndex].url);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentIndex]);

  const handlePreviousImg = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? productImages.length : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNextImg = () => {
    const isLast = currentIndex === productImages.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className={carouselstyles.imageGallery} style={{ backgroundImage: `url(${currentImage})` }}>
      <div className={carouselstyles.thumbnailRow}>
        {productImages.map((productImage, index) => (
<<<<<<< HEAD
          <div className={carouselstyles.thumbnail} key={index} productImage={productImage} style={{ backgroundImage: `url(${productImage.thumbnail_url})` }} />
=======
          <div className={carouselstyles.thumbnail} key={index} productimage={productImage} style={{ backgroundImage: `url(${productImage.thumbnail_url})` }} />
>>>>>>> master
        ))}
        <div className={carouselstyles.goToNext}>▼</div>
      </div>
      <div className={carouselstyles.arrows}>
        <div className={carouselstyles.leftArrow} onClick={handlePreviousImg}>❮</div>
        <div className={carouselstyles.rightArrow} onClick={handleNextImg}>❯</div>
      </div>
      <div className={carouselstyles.lightbox} />
    </div>
  );
}
