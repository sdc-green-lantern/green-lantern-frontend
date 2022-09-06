import React, { useState } from 'react';
import axiosConfig from '../../../../../axiosConfig.js';
import buttonStyles from './Buttons.module.css';

export default function Buttons({ currentStyles }) {
  const [selectedSku, setSkuInfo] = useState({ sku_id: '', quantity: 0 });
  const [selectedCount, setCount] = useState('1');
  const arraySkus = [];
  const currentSkus = currentStyles.skus;
  const itterate = Array.from({ length: 15 }, (v, k) => k + 1);
  let defaultSize = 'Select Size';

  // eslint-disable-next-line no-restricted-syntax, guard-for-in
  for (const key in currentSkus) {
    if (key !== 'null' && currentSkus[key].quantity !== 0) {
      arraySkus.push(
        { skuID: key, quantity: currentSkus[key].quantity, size: currentSkus[key].size },
      );
    }
  }

  if (arraySkus.length === 0) {
    defaultSize = 'OUT OF STOCK';
  }

  const handleChange = (e) => {
    for (let i = 0; i < arraySkus.length; i += 1) {
      if (arraySkus[i].skuID === e.target.value) {
        setSkuInfo({ sku_id: arraySkus[i].skuID, quantity: arraySkus[i].quantity });
        break;
      }
    }
  };

  const sendToCart = () => {
    for (let i = 0; i < selectedCount; i += 1) {
      axiosConfig.post('/cart', { sku_id: selectedSku.sku_id })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className={buttonStyles.buttons}>
      <div className={buttonStyles.quantityRow}>
        <select className={buttonStyles.selectSize} defaultValue="default" onChange={(e) => handleChange(e)}>
          <option value="default" disabled="disabled">{defaultSize}</option>
          {arraySkus.map((skuObj, index) => (
            <option
              className={buttonStyles.selectSize}
              value={skuObj.skuID}
              key={index}
            >
              {skuObj.size}
            </option>
          ))}
        </select>
        <select className={buttonStyles.selectQuantity} defaultValue="1" onChange={(e) => setCount(e.target.value)}>
          {selectedSku.quantity === 0 ? <option value="1" disabled="disabled">-</option> : <option value="1">1</option>}
          {(itterate.slice(1, selectedSku.quantity)).map((number, index) => (
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
      <div className={buttonStyles.checkoutRow}>
        {arraySkus.length !== 0 && (
        <button type="submit" className={buttonStyles.addToBag} onClick={sendToCart}>
          ADD TO BAG
        </button>
        )}
        <button type="submit" className={buttonStyles.favorite}>⭐</button>
      </div>
    </div>
  );
}
