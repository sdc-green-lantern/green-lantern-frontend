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
        <div>
          {review.rating}
          {review.date}
        </div>
        <div>{review.summary}</div>
        <div>{review.body}</div>
        <div>{review.recommend}</div>
        <div>{review.reviewer_name}</div>
        <div>Response to Review</div>
        <div>
          Helpful?
          Yes
          {/* <button>Yes</button> */}
          {review.helpfulness}
          | Report
          {/* <button>Report</button> */}
        </div>

      </div>
    );
  }
}

export default ReviewTile;
