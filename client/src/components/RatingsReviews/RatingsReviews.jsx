import React from 'react';
import RatingsReviewsCSS from './RatingsReviews.module.css';
import ReviewsList from './ReviewsList.jsx';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { productId } = this.props;
    return (
      <div className={RatingsReviewsCSS.ratings_section}>
        <div className={RatingsReviewsCSS.ratings_container}>
          <div className={RatingsReviewsCSS.ratings_breakdown_sidebar}>
            <p>Ratings Breakdown</p>
          </div>
          <div className={RatingsReviewsCSS.product_breakdown_sidebar}>
            <p>Product Breakdown</p>
          </div>
          <div className={RatingsReviewsCSS.sort_options}>
            <p>Sort Options</p>
          </div>
          <div className={RatingsReviewsCSS.reviews_list}>
            <ReviewsList productId={productId} />
          </div>
          <div className={RatingsReviewsCSS.more_reviews_btn}>
            <p>More Reviews</p>
          </div>
          <div className={RatingsReviewsCSS.write_new_review_btn}>
            <p>Write New Review</p>
          </div>
        </div>
      </div>
    );
  }
}

export default RatingsReviews;
