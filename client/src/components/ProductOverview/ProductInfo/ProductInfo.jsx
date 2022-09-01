import React from 'react';
import piStyles from './ProductInfo.module.css';

import Carousel from '../Carousel/Carousel.jsx';
import Buttons from '../Buttons/Buttons.jsx';
import Selection from '../Selection/Selection.jsx';

export default function ProductInfo({ productId }) {
  console.log('pi component... ', productId);
  return (
    <div className={piStyles.productinfo}>
      <Carousel productId={productId} data-testid="Carousel" />
      <div className={piStyles.productoptions}>
        <div className={piStyles.starRatings}><span>Read all reviews</span></div>
        <div className={piStyles.productTitle}>
          <h3>Category</h3>
          <h1>Expanded Product Name</h1>
          <h3 className={piStyles.productPrice}>$369</h3>
        </div>
        <Selection />
        <Buttons />
      </div>
    </div>
  );
}
