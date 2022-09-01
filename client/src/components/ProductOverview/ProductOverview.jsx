import React from 'react';
import postyles from './ProductOverview.module.css';

import Nav from './Nav/Nav.jsx';
import Announcements from './Announcements/Announcements.jsx';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import ProductDescription from './ProductDescription/ProductDescription.jsx';

export default function ProductOverview({ productId }) {
  console.log('po component... ', productId);
  return (
    <div className={postyles.productoverview}>
      <Nav />
      <Announcements />
      <ProductInfo productId={productId} />
      <ProductDescription />
    </div>
  );
}
