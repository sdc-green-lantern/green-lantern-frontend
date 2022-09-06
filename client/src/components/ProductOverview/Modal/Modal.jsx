import React from 'react';
import modalStyles from './Modal.module.css';

export default function Modal({ setShowModal }) {
  return(
    <div className={modalStyles.modal}>
      <button onClick={() => {setShowModal(false)}}>X</button>
    </div>
  );
}