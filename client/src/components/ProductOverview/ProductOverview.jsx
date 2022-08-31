import React from 'react';
import postyles from './ProductOverview.module.css';

import Carousel from './Carousel/Carousel.jsx';

export default function ProductOverview({ productId }) {
  return (
    <div className={postyles.productoverview}>
      <div className={postyles.nav}>
        <div className={postyles.logo}><h1>ATELIER</h1></div>
        <input className={postyles.formInput} type="text" />
        <div className={postyles.formButton}>🔍</div>
      </div>
      <div className={postyles.announcements}>
        <p>
          <span className={postyles.italic}>Site-wide Announcement Message!</span>
          &nbsp;-- Sale / Discount
          <span className={postyles.bold}> Offer </span>
          --&nbsp;
          <span className={postyles.underline}>New Product Highlight </span>
        </p>
      </div>
      <div className={postyles.productinfo}>
        <Carousel productId={productId} data-testid="Carousel" />
        <div className={postyles.productoptions}>Product Options</div>
      </div>
      <div className={postyles.productdescription}>
        Product Description
      </div>
    </div>
  );
}
