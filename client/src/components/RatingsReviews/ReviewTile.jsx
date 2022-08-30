import React from 'react';
import RatingsReviewsCSS from './RatingsReviews.module.css';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { review } = this.props;
    return (
      <div className={RatingsReviewsCSS.review_tile}>
        <div className={RatingsReviewsCSS.review_header}>
          <div className={RatingsReviewsCSS.stars}>
            ★★★★★
          </div>
          <div className={RatingsReviewsCSS.review_date}>
            {review.date}
          </div>
        </div>
        <div className={RatingsReviewsCSS.review_summary}>
          {review.summary}
        </div>
        <div className={RatingsReviewsCSS.review_body}>
          {review.body}
        </div>
        <div>{review.recommend}</div>
        <div>{review.reviewer_name}</div>
        <div>Response to Review</div>
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
