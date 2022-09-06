import React, { useState, useEffect } from 'react';
import modalStyles from './Modal.module.css';

export default function Modal({ currentStyles, setShowModal }) {
  const [productImages, setProductImages] = useState([]);
  const [currentImage, setCurrentImage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const [magnify, setMagnify] = useState(false);

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

  const handlePreviousImg = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? productImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setCurrentImage(productImages[newIndex].url);
  };

  const handleNextImg = () => {
    const isLast = currentIndex === productImages.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setCurrentImage(productImages[newIndex].url);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    setCurrentImage(productImages[index].url);
  };

  const handleMagnify = () => {
    setMagnify(!magnify);
  };

  return(
    <>
      <button
        className={modalStyles.button}
        onClick={() => {setShowModal(false)}}>
        <span>X</span>
      </button>
      <div className={modalStyles.modal}>
          <div className={modalStyles.imgContainer}>
            {currentIndex === 0 ? <div className={modalStyles.leftArrow}></div> : <div className={modalStyles.leftArrow} onClick={handlePreviousImg}>❮</div>}
            {/* IMAGE */}
            <div className={modalStyles.zoom}>
              {magnify ? <img className={modalStyles.image} src={currentImage} style={{ transform: 'scale(2.5)' }} onClick={() => {handleMagnify()}}/> : <img className={modalStyles.image} src={currentImage} onClick={() => {handleMagnify()}}/>}
            </div>
            {currentIndex === productImages.length - 1 ? <div className={modalStyles.rightArrow}></div> : <div className={modalStyles.rightArrow} onClick={handleNextImg}>❯</div>}
          </div>
        <div className={modalStyles.thumbnailRow}>
          {productImages.map((productImage, index) => (
            <div className={modalStyles.thumbs} onClick={() => {handleThumbnailClick(index)}} key={index} id={index} productimage={productImage} style={{ backgroundImage: `url(${productImage.thumbnail_url})` }} />))}
        </div>
      </div>
    </>
  );
}
