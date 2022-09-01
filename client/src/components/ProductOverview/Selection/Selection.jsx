import React from 'react';
import selectionStyles from './Selection.module.css';

export default function Selection() {
  return(
    <div className={selectionStyles.productSelection}>
      <h3>STYLE > <span>SELECTED STYLE</span></h3>
      <div className={selectionStyles.selectionContainer}>
        {/* Map over avaialbe styles */}
        <img className={selectionStyles.selectionOption} src="https://via.placeholder.com/100x100" />
        <img className={selectionStyles.selectionOption} src="https://via.placeholder.com/100x100" />
        <img className={selectionStyles.selectionOption} src="https://via.placeholder.com/100x100" />
        <img className={selectionStyles.selectionOption} src="https://via.placeholder.com/100x100" />
        <img className={selectionStyles.selectionOption} src="https://via.placeholder.com/100x100" />
        <img className={selectionStyles.selectionOption} src="https://via.placeholder.com/100x100" />
        <img className={selectionStyles.selectionOption} src="https://via.placeholder.com/100x100" />
        <img className={selectionStyles.selectionOption} src="https://via.placeholder.com/100x100" />
      </div>
    </div>
  );
}