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

  useEffect(() => {
    //
  }, [product, styles]);

  return (
    <div className={piStyles.productinfo}>
      <Carousel
        data-testid="Carousel"
        currentStyles={currentStyles}
      />
      <div className={piStyles.productoptions}>
        <div className={piStyles.starRatings}><span>Read all reviews</span></div>
        <div className={piStyles.productTitle}>
          <h3>{product.category}</h3>
          <h1>{product.name}</h1>
          <h3 className={piStyles.productPrice}>
            $
            {product.default_price}
          </h3>
        </div>
        <Selection
          styles={styles}
          currentStyles={currentStyles}
          setCurrentStyles={setCurrentStyles}
        />
        <Buttons />
      </div>
    </div>
  );
}
