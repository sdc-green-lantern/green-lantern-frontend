import React, { useState } from 'react';
import Select from 'react-select';
import axiosConfig from '../../../../../axiosConfig.js';
import buttonStyles from './Buttons.module.css';

const sizingStyles = {
  clearIndicator: () => ({}),
  control: (provided, state) => ({
    ...provided,
    cursor: 'pointer',
    border: state.isFocused ? '1px solid lightseagreen' : '1px solid black',
    boxShadow: state.isFocused ? '1px solid lightseagreen' : 'none',
    "&:hover": {
      border: '3px solid lightseagreen',
      boxShadow: 'red',
    },
    borderRadius: '0',
    padding: '0 10px',
    height: '100%',
    width: '160%',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: 'black',
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
  menu: (provided) => ({
    ...provided,
    width: "160%",
  }),
};

const quantityStyles = {
  clearIndicator: () => ({}),
  control: (provided) => ({
    ...provided,
    cursor: 'pointer',
    height: '100%',
    borderRadius: '0',
  }),
  menu: (provided) => ({
    ...provided,
    width: '160%',
  }),
};

export default function Buttons({ currentStyles }) {
  const [selectedSku, setSkuInfo] = useState({ sku_id: '', quantity: 0 });
  const [selectValue, setSelectValue] = useState('');
  const [selectedCount, setCount] = useState('1');
  const [message, showMessage] = useState(false);
  const selectRef = React.useRef();
  const arraySkus = [];
  const currentSkus = currentStyles.skus;
  const itterate = Array.from({ length: 15 }, (v, k) => k + 1);

  const options = [];

  // eslint-disable-next-line no-restricted-syntax, guard-for-in
  for (const key in currentSkus) {
    if (key !== 'null' && currentSkus[key].quantity !== 0) {
      arraySkus.push(
        { skuID: key, quantity: currentSkus[key].quantity, size: currentSkus[key].size },
      );
      options.push({ value: key, label: currentSkus[key].size });
    }
  }

  const handleChange = (selectValue) => {
    setSelectValue(selectValue);
    showMessage(false);
    // console.log(selectValue);
    for (let i = 0; i < arraySkus.length; i += 1) {
      if (arraySkus[i].skuID === selectValue.value) {
        setSkuInfo({ sku_id: arraySkus[i].skuID, quantity: arraySkus[i].quantity });
        break;
      }
    }
  };

  const sendToCart = () => {
    if (selectedSku.sku_id && selectedSku.quantity > 0) {
      for (let i = 0; i < selectedCount; i += 1) {
        axiosConfig.post('/cart', { sku_id: selectedSku.sku_id })
          .then((result) => {
            // console.log(result);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      selectRef.current.focus();
      showMessage(true);
    }
  };

  return (
    <div className={buttonStyles.buttons}>
      {message && <div>Please select a size</div>}
      <div className={buttonStyles.quantityRow}>
        <Select
          styles={sizingStyles}
          id="Selector"
          placeholder={arraySkus.length === 0 ? 'OUT OF STOCK' : 'SELECT SIZE'}
          openMenuOnFocus
          ref={selectRef}
          options={options}
          value={selectValue}
          onChange={handleChange}
        />

        <select
          className={buttonStyles.selectQuantity}
          defaultValue="1"
          onChange={(e) => setCount(e.target.value)}
          styles={quantityStyles}
        >
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
        <button className={buttonStyles.addToBag} type="submit" onClick={sendToCart}>
          ADD TO BAG
        </button>
        )}
        <button className={buttonStyles.favorite} type="submit">⭐</button>
      </div>
    </div>
  );
}
