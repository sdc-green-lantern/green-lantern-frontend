import React from 'react';
import {format, parseISO} from 'date-fns';
import RatingsReviewsCSS from './RatingsReviews.module.css';


class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    const photos = review.photos.slice(0, 5).map((photo) =>
      (
        <a href={photo.url} key={photo.id}>
          <img
            src={photo.url}
            alt={photo.id}
            className={RatingsReviewsCSS.thumbnail_img}
          />
        </a>
      )
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
        <div>{recommend}</div>
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
