import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import RatingsReviewsCSS from './RatingsReviews.module.css';
import ReviewImageModalCSS from './ReviewImageModal.module.css';

export default class ReviewImageModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { show, close, photo } = this.props;
    console.log(show);

    if (show === false) {
      return null;
    }
    // return (
    //   <div>
    //     <div>{this.props.children}</div>
    //     <button onClose={close}>Close</button>
    //   </div>

    // );

    return (
      <div className={ReviewImageModalCSS.imgModalBackground}>
        <div className={ReviewImageModalCSS.imgModalContainer}>
          <button
            onClick={close}
            className={RatingsReviewsCSS.button}
            type="button"
          >
            {/* <FontAwesomeIcon icon={faWindowClose} /> */}
            Close
          </button>
          <img
            src={photo.url}
            alt={photo.id}
            className={RatingsReviewsCSS.thumbnail_img}
          />
        </div>
      </div>
    );
  }
}
