import React, { useState, useEffect } from 'react';
import carouselstyles from './Carousel.module.css';

export default function Carousel({ currentStyles }) {
  const [productImages, setProductImages] = useState([]);
  const [currentImage, setCurrentImage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    //
    if (Object.keys(currentStyles).length !== 0) {
      setProductImages(currentStyles.photos);
      if (productImages.length !== 0) {
        setCurrentImage(productImages[0].url);
      }
    }
  }, [currentStyles, productImages]);

  const handlePreviousImg = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? productImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setCurrentImage(productImages[newIndex].url);
    // console.log('prev/newIndex... ', newIndex);
    // console.log('prev/currentImg... ', productImages[newIndex].url);
  };

  const handleNextImg = () => {
    const isLast = currentIndex === productImages.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setCurrentImage(productImages[newIndex].url);
    // console.log('next/newIndex... ', newIndex);
    // console.log('next/currentImg... ', productImages[newIndex].url);
  };

  const selectThumbnail = (index) => document.getElementById(index);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    setCurrentImage(productImages[index].url);
    console.log(selectThumbnail(index));
    // console.log('thumbclick/index... ', index);
    // console.log('thumbclick/currentImg... ', productImages[index].url);
  };

  console.log(productImages.length);
  return (
    <div className={carouselstyles.imageGallery} style={{ backgroundImage: `url(${currentImage})` }}>
      <div className={carouselstyles.thumbnailRow}>
        {productImages.map((productImage, index) => (
          <div className={carouselstyles.thumbnail} onClick={() => {handleThumbnailClick(index)}} key={index} id={index} productimage={productImage} style={{ backgroundImage: `url(${productImage.thumbnail_url})` }} />))}
        <div className={carouselstyles.goToNext}>▼</div>
      </div>
      <div className={carouselstyles.arrows}>
        {currentIndex === 0 ? <div className={carouselstyles.leftArrow}></div> : <div className={carouselstyles.leftArrow} onClick={handlePreviousImg}>❮</div>}
        {currentIndex === productImages.length - 1 ? <div className={carouselstyles.rightArrow}></div> : <div className={carouselstyles.rightArrow} onClick={handleNextImg}>❯</div>}
      </div>
      <div className={carouselstyles.lightbox} />
    </div>
  );
}
