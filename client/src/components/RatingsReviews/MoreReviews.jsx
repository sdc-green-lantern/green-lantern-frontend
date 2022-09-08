import React from 'react';
import RatingsReviewsCSS from './RatingsReviews.module.css';

class MoreReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { numReviews, numDisplayed, handleMoreReviews } = this.props;
    if (numReviews === numDisplayed) {
      return (
        <></>
      );
    }
    return (
      <button
        className={RatingsReviewsCSS.button}
        type="button"
        onClick={handleMoreReviews}
      >
        MORE REVIEWS
      </button>
    );
  }
}

export default MoreReviews;
