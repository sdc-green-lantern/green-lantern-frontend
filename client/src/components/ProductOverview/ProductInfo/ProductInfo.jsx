import React, { useEffect } from 'react';
import piStyles from './ProductInfo.module.css';

import Carousel from '../Carousel/Carousel.jsx';
import Buttons from '../Buttons/Buttons.jsx';
import Selection from '../Selection/Selection.jsx';

export default function ProductInfo(props) {
  const {
    product, styles,
    currentStyles, setCurrentStyles,
  } = props;

  let priceDisplay = (
    <div>
      $
      {currentStyles.original_price}
    </div>
  );

  if (currentStyles.sale_price !== null) {
    priceDisplay = (
      <span>
        <strike>
          $
          {currentStyles.original_price}
        </strike>
        $
        {currentStyles.sale_price}
      </span>
    );
  }

  useEffect(() => {
    //
  }, [product, styles]);

  return (
    <div className={piStyles.productinfo}>
      <Carousel
        data-testid="Carousel"
        // styles={styles}
        // stylesIndex={stylesIndex}
        // setStylesIndex={setStylesIndex}
        currentStyles={currentStyles}
      />
      <div className={piStyles.productoptions}>
        <div className={piStyles.starRatings}><span>Read all reviews</span></div>
        <div className={piStyles.productTitle}>
          <h3>{product.category}</h3>
          <h1>{product.name}</h1>
          <h3 className={piStyles.productPrice}>
            {priceDisplay}
          </h3>
        </div>
        <Selection
          styles={styles}
          // stylesIndex={stylesIndex}
          // setStylesIndex={setStylesIndex}
          currentStyles={currentStyles}
          setCurrentStyles={setCurrentStyles}
        />
        <Buttons
          // styles={styles}
          // stylesIndex={stylesIndex}
          // setStyleIndex={setStylesIndex}
          currentStyles={currentStyles}
          // key={currentStyles.style_id}
        />
      </div>
    </div>
  );
}
