import React from 'react';
import pdStyles from './ProductDescription.module.css';

export default function ProductDescription() {
  return (
    <div className={pdStyles.productdescription}>
      <div className={pdStyles.descriptionBody}>
        <h3>Product Slogan. Pithy Description or Catchphrase</h3>
        <p>ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis egestas</p>
        <p>eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus
          euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat
          sed cras ornare arcu dui vivamus</p>
      </div>
      <div className={pdStyles.checklist}>
        <ul className={pdStyles.checklistStyles}>
          <li className={pdStyles.listItem}>✅ GMO and Pesticide-free</li>
          <li className={pdStyles.listItem}>✅ Made with 100% Genetic Modification</li>
          <li className={pdStyles.listItem}>✅ This is made up</li>
          <li className={pdStyles.listItem}>✅ It doesn't matter</li>
        </ul>
      </div>
    </div>
  );
}
