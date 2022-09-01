import React from 'react';
import buttonStyles from './Buttons.module.css';

export default function Buttons() {
  return(
    <div className={buttonStyles.buttons}>
      <div className={buttonStyles.quantityRow}>
        <div className={buttonStyles.selectSize}>
          <p>select size</p>
          <p>▼</p>
        </div>
        <div className={buttonStyles.selectQuantity}>
          <p>1</p>
          <p>▼</p>
        </div>
      </div>
      <div className={buttonStyles.checkoutRow}>
        <div className={buttonStyles.addToBag}>
          <p>add to bag</p>
          <p>▼</p>
        </div>
        <div className={buttonStyles.favorite}>⭐</div>
      </div>
    </div>
  );
}