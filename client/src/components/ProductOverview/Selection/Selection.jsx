import React, { useState, useEffect } from 'react';
import selectionStyles from './Selection.module.css';

import axiosConfig from '../../../../../axiosConfig.js';

export default function Selection({ styles, currentStyles, setCurrentStyles }) {
  useEffect(() => {
    //
  }, [styles, currentStyles]);

  return(
    <div className={selectionStyles.productSelection}>
      <h3>STYLE > <span>{currentStyles.name}</span></h3>
      <div className={selectionStyles.selectionContainer}>
        {styles.map((style, index) => <img className={selectionStyles.selectionOption} key={index} src={style.photos[0].thumbnail_url} onClick={() => {setCurrentStyles(style)}} />)}
      </div>
    </div>
  );
}