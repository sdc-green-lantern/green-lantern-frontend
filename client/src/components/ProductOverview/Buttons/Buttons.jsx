import React, { useState } from 'react';
import buttonStyles from './Buttons.module.css';

export default function Buttons({ currentStyles }) {
  const [selectedSku, setSkuInfo] = useState({ sku_id: '', quantity: 0 });
  const [selectedCount, setCount] = useState('1');
  const arraySkus = [];
  const currentSkus = currentStyles.skus;
  const itterate = Array.from({ length: selectedSku.quantity }, (v, k) => k + 1) || [1];

  // eslint-disable-next-line no-restricted-syntax, guard-for-in
  for (const key in currentSkus) {
    if (key !== 'null' && currentSkus[key].quantity !== 0) {
      arraySkus.push(
        { skuID: key, quantity: currentSkus[key].quantity, size: currentSkus[key].size },
      );
    }
  }

  return (
    <div className={buttonStyles.buttons}>
      { arraySkus.length !== 0 && (
        <div className={buttonStyles.quantityRow}>
          <select className={buttonStyles.selectSize} defaultValue="default" onChange={(e) => setSkuInfo({ sku_id: e.target.name, quantity: e.target.value })}>
            <option value="default" disabled="disabled">Select Size</option>
            {arraySkus.map((skuObj, index) => (
              <option
                className={buttonStyles.selectSize}
                name={skuObj.skuID}
                value={skuObj.quantity}
                key={index}
              >
                {skuObj.size}
              </option>
            ))}
          </select>
          <select className={buttonStyles.selectQuantity} defaultValue="1" onChange={(e) => setCount(e.target.value)}>
            {itterate.map((number, index) => (
              <option
                className={buttonStyles.selectQuantity}
                value={number}
                key={index}
              >
                {number}
              </option>
            ))}
          </select>
        </div>
      )}
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
