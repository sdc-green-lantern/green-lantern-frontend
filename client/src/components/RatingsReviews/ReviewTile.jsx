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
    };
    this.showReviewImageModal = this.showReviewImageModal.bind(this);
    this.closeReviewImageModal = this.closeReviewImageModal.bind(this);
  }

  showReviewImageModal(event) {
    console.log("Open Modal: ");
    console.log(event.target);
    this.setState({ show: true });
  }

  closeReviewImageModal(event) {
    console.log("Close Modal: ");
    console.log(event.target);
    this.setState({ show: false });
  }

  render() {
    const { review } = this.props;

    const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
    const date = format(parseISO(review.date), 'MMMM dd, yyyy');
    const summary = review.summary.slice(0, 60);
    const recommend = review.recommend === true ? 'I recommend this product' : '';
    const reviewer = review.reviewer_name;
    const response = review.response !== null ? `Response from seller: ${review.response}` : '';
    const body = review.body.slice(0, 250);

    var { show } = this.state;
    const photos = review.photos.slice(0, 5).map((photo) =>
      (
        // <button
        //   className={RatingsReviewsCSS.review_photo}
        //   type="submit"
        //   // href={photo.url}
        //   key={photo.id}
        //   onClick={this.showReviewImageModal}
        // >
        <div key={photo.id}
          // onClick={() => {this.showReviewImageModal} }
          onClick={this.showReviewImageModal}
          role="button"
        >
          <img
            src={photo.url}
            alt={photo.id}
            className={RatingsReviewsCSS.thumbnail_img}
          />
          <ReviewImageModal
            show={show}
            // close={() => {this.closeReviewImageModal} }
            close={this.closeReviewImageModal}
            photo={photo}
          />
        </div>

        // </button>
      ),
    );

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
            {body}
          </div>
          <div className={RatingsReviewsCSS.photos}>
            {photos}
          </div>

        </div>
        <div>
          <FontAwesomeIcon icon={faCheck} />
          {recommend}
        </div>
        <div>{response}</div>
        <div className="review_actions">
          Helpful?
          Yes
          {review.helpfulness}
          | Report
        </div>

      </div>
    );
  }
}

export default ReviewTile;
