import React, { useState, useEffect } from 'react';
import postyles from './ProductOverview.module.css';

import axiosConfig from '../../../../axiosConfig.js';

import Nav from './Nav/Nav.jsx';
import Announcements from './Announcements/Announcements.jsx';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import ProductDescription from './ProductDescription/ProductDescription.jsx';

export default function ProductOverview({ productId, sendInteraction }) {
  const [product, setProduct] = useState({ features: [] });
  const [styles, setStyles] = useState([]);
  // const [stylesIndex, setStylesIndex] = useState(0);
  const [currentStyles, setCurrentStyles] = useState({});

  useEffect(() => {
    const productEndpoint = `/products/${productId}`;
    const stylesEndpoint = `/products/${productId}/styles`;

    const fetchData = async (url) => {
      const response = await axiosConfig.get(url);
      return response.data;
    };

    // fetchData('/products/65661')
    fetchData(productEndpoint)
      .then((response) => {
        setProduct(response);
      })
      .catch((err) => {
        console.error(err);
      });

    // fetchData('/products/65661/styles')
    fetchData(stylesEndpoint)
      .then((response) => {
        setStyles(response.results);
        setCurrentStyles(response.results[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className={postyles.productoverview} onClick={(e) => sendInteraction('Product Overview', e)}>
      <Nav />
      <Announcements />
      <ProductInfo
        productId={productId}
        product={product}
        styles={styles}
        // stylesIndex={stylesIndex}
        // setStyleIndex={setStylesIndex}
        currentStyles={currentStyles}
        setCurrentStyles={setCurrentStyles}
      />
      <ProductDescription product={product} />
    </div>
  );
}
