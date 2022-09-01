import React, { useState, useEffect } from 'react';
import piStyles from './ProductInfo.module.css';

import Carousel from '../Carousel/Carousel.jsx';
import Buttons from '../Buttons/Buttons.jsx';
import Selection from '../Selection/Selection.jsx';

export default function ProductInfo({ productId }) {
  // const [styles, setStyles] = useState([]);

  useEffect(() => {
    //
  }, []);
  // useEffect(() => {
  //   axiosConfig.get(`/products/${productId}/styles`)
  //     .then((response) => {
  //       const result = response.data.results;
  //       console.log('pi component - styles... ', result);
  //       setStyles(result);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div className={piStyles.productinfo}>
      <Carousel
        data-testid="Carousel"
        productId={productId}
      />
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
