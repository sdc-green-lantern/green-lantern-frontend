import React, { useState, useEffect } from 'react';
import selectionStyles from './Selection.module.css';

export default function Selection({ styles, selectStyles }) {
  useEffect(() => {
    console.log('in selection, style => ', styles);
  }, [styles]);

  return(
    <div className={selectionStyles.productSelection}>
      <h3>STYLE > <span>SELECTED STYLE</span></h3>
      <div className={selectionStyles.selectionContainer}>
        {/* <img className={selectionStyles.selectionOption} src="https://via.placeholder.com/100x100" /> */}
        {styles.map((style, index) => <img className={selectionStyles.selectionOption} src={style.photos[0].thumbnail_url} />)}
      </div>
    </div>
  );
}