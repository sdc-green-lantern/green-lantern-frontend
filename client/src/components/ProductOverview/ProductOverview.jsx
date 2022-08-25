import React, { useState } from 'react';
import postyles from './ProductOverview.module.css';

export default function ProductOverview() {
  return (
    <div className={postyles.productoverview}>
      <div className={postyles.nav}>
        Search
      </div>
      <div className={postyles.announcements}>
        Announcements
      </div>
      <div className={postyles.productinfo}>
        <div className={postyles.imagegallery}>Image Gallery</div>
        <div className={postyles.productoptions}>Product Options</div>
      </div>
      <div className={postyles.productdescription}>
        Product Description
      </div>
    </div>
  );
}