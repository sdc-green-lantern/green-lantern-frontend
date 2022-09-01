import React, { useState, useEffect } from 'react';
import carouselstyles from './Carousel.module.css';

export default function Carousel() {
  const [productImages, setProductImages] = useState([]);
  const [currentImage, setCurrentImage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    //
  }, []);
  // axiosConfig.get(`/products/${productId}/styles`)
  //   .then((response) => {
  //     const result = response.data.results;
  //     console.log('in carousel, result => ', result);
  //     setStyles(result);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

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
          <div className={carouselstyles.thumbnail} key={index} productimage={productImage} style={{ backgroundImage: `url(${productImage.thumbnail_url})` }} />
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
