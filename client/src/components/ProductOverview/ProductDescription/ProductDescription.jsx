import React from 'react';
import pdStyles from './ProductDescription.module.css';

export default function ProductDescription({ product }) {
  // const { features } = product;
  console.log('product description - product features... ', product.features);

  return (
    <div className={pdStyles.productdescription}>
      <div className={pdStyles.descriptionBody}>
        <h3>{product.slogan}</h3>
        <p>{product.description}</p>
      </div>
      <div className={pdStyles.checklist}>
        <ul className={pdStyles.checklistStyles}>
          {product.features.map((feature) => <li className={pdStyles.listItem}>✅ <span>{feature.feature}: {feature.value}</span></li>)}
        </ul>
      </div>
    </div>
  );
}
