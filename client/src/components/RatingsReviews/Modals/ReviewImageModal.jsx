import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import RatingsReviewsCSS from '../RatingsReviews.module.css';
import ReviewImageModalCSS from './ReviewImageModal.module.css';

export default class ReviewImageModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { close, photo } = this.props;
    return (
      <div className={ReviewImageModalCSS.imgModalBackground}>
        <div className={ReviewImageModalCSS.imgModalContainer}>
          <div>
            <button
              onClick={close}
              className={ReviewImageModalCSS.closeModalButton}
              type="button"
            >
              {/* <FontAwesomeIcon icon={faWindowClose} /> */}
              Close
            </button>
            <img src={photo.url} alt={photo.id} />
          </div>
          {/* <div>

          </div> */}
        </div>
      </div>
    );
  }
}
