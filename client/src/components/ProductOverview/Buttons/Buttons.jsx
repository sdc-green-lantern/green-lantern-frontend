import React, { useState, useEffect } from 'react';
import buttonStyles from './Buttons.module.css';

export default function Buttons({ currentStyles }) {
  // const [currentSkus, setCurrentSkus] = useState([]);

  useEffect(() => {
    // console.log('buttons :: currentStyles... ', currentStyles);
    // console.log('buttons :: currentStyles.skus... ', currentStyles.skus);
    // if (Object.keys(currentStyles).length !== 0) {
    //   setCurrentSkus(Object.keys(currentStyles.skus));
    // }
  }, [currentStyles]);

  return(
    <div className={buttonStyles.buttons}>
      <div className={buttonStyles.quantityRow}>
        <select className={buttonStyles.selectSize} defaultValue={"default"}>
          <option value="default" disabled="disabled">Select Size</option>
          {/* {currentSkus.length !== 0 ? currentSkus.map((currentSku, index) => (
            <option className={buttonStyles.selectSize} key={index}>{currentStyles.skus[currentSku].size}</option>
          )) : ''} */}
        </select>
        <select className={buttonStyles.selectQuantity}>
          {/* {currentStyles.skus[currentSku].quantity.map((currentSku, index) => (
            <option className={buttonStyles.selectSize} key={index}>{currentStyles.skus[currentSku].size}</option>
          ))} */}
        </select>
      </div>
      <div className={buttonStyles.checkoutRow}>
        <div className={buttonStyles.addToBag}>
          <p>add to bag</p>
          <p>+</p>
        </div>
        <div className={buttonStyles.favorite}>⭐</div>
      </div>
    </div>
  );
}
