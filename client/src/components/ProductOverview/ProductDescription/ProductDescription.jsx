import React from 'react';
import pdStyles from './ProductDescription.module.css';

export default function ProductDescription({ product }) {
  const conditionalClassName = product.features.length !== 0 ? '' : pdStyles.checklistStyles;

  return (
    <div className={pdStyles.productdescription}>
      <div className={pdStyles.descriptionBody}>
        <h3>{product.slogan}</h3>
        <p>{product.description}</p>
      </div>
      <div className={pdStyles.checklist}>
        { product.features.length !== 0 ? <ul className={pdStyles.checklistStyles}>
          {product.features.map((feature, index) => <li className={pdStyles.listItem} key={index}>✅ <span>{feature.feature}: {feature.value}</span></li>)}
        </ul> : ''}
      </div>
    </div>
  );
}
