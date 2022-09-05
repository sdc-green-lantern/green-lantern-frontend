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
          {currentStyles.sale_price !== null ? <h3 className={piStyles.productPrice}><del>${product.default_price}</del> ${currentStyles.sale_price}</h3> : <h3>${product.default_price}</h3>}
          {/* {styles[stylesIndex].sale_price !== null ? <h3 className={piStyles.productPrice}><del>${product.default_price}</del> ${styles[stylesIndex].sale_price}</h3> : <h3>${product.default_price}</h3>} */}
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
        />
      </div>
    </div>
  );
}
