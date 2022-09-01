/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable react/jsx-no-useless-fragment */

import React from 'react';
import { format, parseISO } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import RatingsReviewsCSS from './RatingsReviews.module.css';
import ReviewImageModal from './ReviewImageModal.jsx';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      currentPhoto: {},
      displayFullBody: false,
    };
    this.showReviewImageModal = this.showReviewImageModal.bind(this);
    this.closeReviewImageModal = this.closeReviewImageModal.bind(this);
  }

  showReviewImageModal(event) {
    const currentPhoto = {
      url: event.target.src,
      id: event.target.alt,
    };
    this.setState({ show: true });
    this.setState({ currentPhoto });
  }

  closeReviewImageModal() {
    this.setState({ show: false });
  }

  render() {
    const { review } = this.props;

    const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
    const date = format(parseISO(review.date), 'MMMM dd, yyyy');
    const summary = review.summary.slice(0, 60);
    const recommend = review.recommend === true ? 'I recommend this product' : '';
    const reviewer = review.reviewer_name;
    const response = review.response !== null ? review.response : '';
    const responseStyle = { 'font-weight': 'bold' };
    const { body } = review;

    const { show, currentPhoto, displayFullBody } = this.state;
    const photos = review.photos.slice(0, 5).map((photo) => (
      <div
        key={photo.id}
        onClick={this.showReviewImageModal}
        role="button"
      >
        <img
          src={photo.url}
          alt={photo.id}
          className={RatingsReviewsCSS.thumbnail_img}
        />
      </div>
    ));

    return (
      <div className={RatingsReviewsCSS.review_tile}>
        <div className={RatingsReviewsCSS.review_header}>
          <div className={RatingsReviewsCSS.stars}>
            {stars}
          </div>
          <div className={RatingsReviewsCSS.review_date}>
            {`${reviewer}, ${date}`}
          </div>
        </div>
        <div className={RatingsReviewsCSS.review_summary}>
          {summary}
        </div>
        <div className={RatingsReviewsCSS.review_body}>
          <div className={RatingsReviewsCSS.body_text}>
            {displayFullBody === false && body.length > 250
              ? (
                <>
                  { body.slice(0, 250) }
                  <p>
                    <a
                      href="#0"
                      onClick={() => { this.setState({ displayFullBody: true }); }}
                    >
                      Show more
                    </a>
                  </p>
                </>
              )
              : (
                <>
                  { body }
                </>
              )}

          </div>
          <div className={RatingsReviewsCSS.photos}>
            {photos}
          </div>

        </div>
        <div>
          <FontAwesomeIcon icon={faCheck} />
          {recommend}
        </div>
        <div className={RatingsReviewsCSS.review_response}>
          {response !== ''
            ? (
              <>
                <p style={responseStyle}>Response:</p>
                <p>The product is good. stop complaining.</p>
              </>
            )
            : (
              <>
              </>
            )}
        </div>
        <div className="review_actions">
          Helpful?
          Yes
          {review.helpfulness}
          | Report
        </div>
        {show && (
          <ReviewImageModal
            close={this.closeReviewImageModal}
            photo={currentPhoto}
          />
        )}
      </div>
    );
  }
}

export default ReviewTile;
