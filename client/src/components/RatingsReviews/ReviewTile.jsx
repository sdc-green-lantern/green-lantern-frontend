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
          {review.body}
        </div>
        <div>{recommend}</div>
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
