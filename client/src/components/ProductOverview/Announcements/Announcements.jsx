import React from 'react';
import annStyles from './Announcements.module.css';

export default function Announcements() {
  return (
    <div className={annStyles.announcements}>
      <p>
        <span className={annStyles.italic}>Site-wide Announcement Message!</span>
        &nbsp;-- Sale / Discount
        <span className={annStyles.bold}> Offer </span>
        --&nbsp;
        <span className={annStyles.underline}>New Product Highlight </span>
      </p>
    </div>
  );
}