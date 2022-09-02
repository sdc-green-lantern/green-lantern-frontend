import React, { useState, useEffect } from 'react';
import postyles from './ProductOverview.module.css';

import axiosConfig from '../../../../axiosConfig.js';

import Nav from './Nav/Nav.jsx';
import Announcements from './Announcements/Announcements.jsx';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import ProductDescription from './ProductDescription/ProductDescription.jsx';

export default function ProductOverview({ productId }) {
  const [product, setProduct] = useState({ features: [] });
  const [styles, setStyles] = useState([]);

  useEffect(() => {
    axiosConfig.get(`/products/${productId}`)
      .then((response) => {
        console.log('get product => ', response.data);
        setProduct(response.data);
      })
      .then(() => {
        axiosConfig.get(`/products/${productId}/styles`)
          .then((response) => {
            console.log('get styles => ', response.data);
            setStyles(response.data.results);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className={postyles.productoverview}>
      <Nav />
      <Announcements />
      <ProductInfo productId={productId} product={product} styles={styles} setStyles={setStyles} />
      <ProductDescription productId={productId} product={product} />
    </div>
  );
}
