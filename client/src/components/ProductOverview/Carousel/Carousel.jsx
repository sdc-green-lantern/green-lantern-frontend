import React, { useState, useEffect } from 'react';
import carouselstyles from './Carousel.module.css';

export default function Carousel({ currentStyles }) {
  const [productImages, setProductImages] = useState([]);
  const [currentImage, setCurrentImage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    //
    // console.log('carousel :: currentStyles => ', currentStyles);
    // const getImages = async () => {
    //   const getAllImages = await setProductImages(currentStyles.photos);
    //   const getCurrentImage = await setCurrentImage(productImages[currentIndex].url);
    // };

    // getImages()
    //   .then(() => {
    //     console.log('carousel :: productImages => ', productImages);
    //     console.log('carousel :: currentImage => ', currentImage);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
    console.log('carousel :: currentStyles => ', currentStyles);

    const getProductImages = async () => {
      const getAllImages = await setProductImages(currentStyles.photos);
      return getAllImages;
    };

    getProductImages()
      .then(() => {
        console.log('await setProductImages... ', productImages);
      })
      .catch((err) => {
        console.error(err);
      });

    const getCurrentImage = async () => {
      const getImage = await setCurrentImage(productImages[currentIndex].url);
      return getImage;
    };

    getCurrentImage()
      .then(() => {
        console.log('await setCurrentImage... ', currentImage);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [currentStyles, productImages, currentImage]);

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
        {/* {productImages.map((productImage, index) => (
          <div className={carouselstyles.thumbnail} key={index} productimage={productImage} style={{ backgroundImage: `url(${productImage.thumbnail_url})` }} />
        ))} */}
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
