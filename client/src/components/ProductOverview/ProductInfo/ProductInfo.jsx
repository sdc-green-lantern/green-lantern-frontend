import React, { useState, useEffect } from 'react';
import piStyles from './ProductInfo.module.css';

import Carousel from '../Carousel/Carousel.jsx';
import Buttons from '../Buttons/Buttons.jsx';
import Selection from '../Selection/Selection.jsx';

export default function ProductInfo({ productId, product, styles, setStyles }) {
  useEffect(() => {
    console.log('productId => ', productId);
    console.log('product => ', product);
    console.log('style => ', styles);
  }, [product, styles]);

  return (
    <div className={piStyles.productinfo}>
      <Carousel
        data-testid="Carousel"
      />
      <div className={piStyles.productoptions}>
        <div className={piStyles.starRatings}><span>Read all reviews</span></div>
        <div className={piStyles.productTitle}>
          <h3>{product.category}</h3>
          <h1>{product.name}</h1>
          <h3 className={piStyles.productPrice}>${product.default_price}</h3>
        </div>
        <Selection styles={styles} setStyles={setStyles} />
        <Buttons />
      </div>
    </div>
  );
}
