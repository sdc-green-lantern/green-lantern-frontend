import React from 'react';
import navStyles from './Nav.module.css';

export default function Nav() {
  return (
    <div className={navStyles.nav}>
      <div className={navStyles.logo}><h1>ATELIER</h1></div>
      <input className={navStyles.formInput} type="text" />
      <div className={navStyles.formButton}>🔍</div>
    </div>
  );
}
