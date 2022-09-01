import React from 'react';
import postyles from './ProductOverview.module.css';

import Carousel from './Carousel/Carousel.jsx';
import Buttons from './Buttons/Buttons.jsx'

export default function ProductOverview({ productId }) {
  return (
    <div className={postyles.productoverview}>
      <div className={postyles.nav}>
        <div className={postyles.logo}><h1>ATELIER</h1></div>
        <input className={postyles.formInput} type="text" />
        <div className={postyles.formButton}>🔍</div>
      </div>
      <div className={postyles.announcements}>
        <p>
          <span className={postyles.italic}>Site-wide Announcement Message!</span>
          &nbsp;-- Sale / Discount
          <span className={postyles.bold}> Offer </span>
          --&nbsp;
          <span className={postyles.underline}>New Product Highlight </span>
        </p>
      </div>
      <div className={postyles.productinfo}>
        <Carousel productId={productId} data-testid="Carousel" />
        <div className={postyles.productoptions}>
          <div className={postyles.starRatings}><span>Read all reviews</span></div>
          <div className={postyles.productTitle}>
            <h3>Category</h3>
            <h1>Expanded Product Name</h1>
            <h3 className={postyles.productPrice}>$369</h3>
          </div>
          <div className={postyles.productSelection}>
            <h3>STYLE > <span>SELECTED STYLE</span></h3>
            <div className={postyles.selectionContainer}>
              <img className={postyles.selectionOption} src="https://via.placeholder.com/100x100" />
              <img className={postyles.selectionOption} src="https://via.placeholder.com/100x100" />
              <img className={postyles.selectionOption} src="https://via.placeholder.com/100x100" />
              <img className={postyles.selectionOption} src="https://via.placeholder.com/100x100" />
              <img className={postyles.selectionOption} src="https://via.placeholder.com/100x100" />
              <img className={postyles.selectionOption} src="https://via.placeholder.com/100x100" />
              <img className={postyles.selectionOption} src="https://via.placeholder.com/100x100" />
              <img className={postyles.selectionOption} src="https://via.placeholder.com/100x100" />
            </div>
          </div>
          <Buttons />
        </div>
      </div>
      <div className={postyles.productdescription}>
      <div className={postyles.descriptionBody}>
        <h3>Product Slogan. Pithy Description or Catchphrase</h3>
        <p>ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas</p>
        <p>eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus</p>
      </div>
      <div className={postyles.checklist}>
        <ul className={postyles.checklistStyles}>
          <li className={postyles.listItem}>✅ GMO and Pesticide-free</li>
          <li className={postyles.listItem}>✅ Made with 100% Genetic Modification</li>
          <li className={postyles.listItem}>✅ This is made up</li>
          <li className={postyles.listItem}>✅ It doesn't matter</li>
        </ul>
      </div>
      </div>
    </div>
  );
}
