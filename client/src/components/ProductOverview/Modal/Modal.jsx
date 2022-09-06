import React, { useState, useEffect } from 'react';
import modalStyles from './Modal.module.css';

export default function Modal({ currentStyles, setShowModal }) {
  const [productImages, setProductImages] = useState([]);
  const [currentImage, setCurrentImage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    //
    if (Object.keys(currentStyles).length !== 0) {
      setProductImages(currentStyles.photos);
      if (productImages.length !== 0) {
        setCurrentIndex(0);
        setCurrentImage(productImages[currentIndex].url);
      }
    }
  }, [currentStyles, productImages]);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    setCurrentImage(productImages[index].url);
    // console.log('thumbclick/index... ', index);
    // console.log('thumbclick/currentImg... ', productImages[index].url);
  };

  return(
    <>
      <button className={modalStyles.button} onClick={() => {setShowModal(false)}}>X</button>
      <div className={modalStyles.modal}>
        <img className={modalStyles.image} src={currentImage} />
        <div className={modalStyles.thumbnailRow}>
          {productImages.map((productImage, index) => (
            <div className={modalStyles.thumbs} onClick={() => {handleThumbnailClick(index)}} key={index} id={index} productimage={productImage} style={{ backgroundImage: `url(${productImage.thumbnail_url})` }} />))}
        </div>
      </div>
    </>
  );
}

{/* <div className={carouselstyles.imageGallery} style={{ backgroundImage: `url(${currentImage})` }}>
<div className={carouselstyles.thumbnailRow}>
  {productImages.map((productImage, index) => (
    <div className={carouselstyles.thumbnail} onClick={() => {handleThumbnailClick(index)}} key={index} id={index} productimage={productImage} style={{ backgroundImage: `url(${productImage.thumbnail_url})` }} />))}
</div> */}