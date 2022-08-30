import React from 'react';
import postyles from './ProductOverview.module.css';

import Carousel from './Carousel/Carousel.jsx';

export default function ProductOverview({ productId }) {
  return (
    <div className={postyles.productoverview}>
      <div className={postyles.nav}>
        Search
      </div>
      <div className={postyles.announcements}>
        Announcements
      </div>
      <div className={postyles.productinfo}>
        <Carousel productId={productId} />
        <div className={postyles.productoptions}>Product Options</div>
      </div>
      <div className={postyles.productdescription}>
        Product Description
      </div>
    </div>
  );
}
