import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faRectangleXmark } from '@fortawesome/free-regular-svg-icons';
import modal from './Modal.module.css';

class Modal extends React.Component {
  state = {
    isShown: false,
  };

  render () {
    return (
      <div className={modal.container}>
        <button>
        <FontAwesomeIcon icon={faXmark}/>
        </button>
      </div>
    )
  }
}

export default Modal;
