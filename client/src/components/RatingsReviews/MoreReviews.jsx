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
        <div></div>
      );
    } else {
      return (
        <div>
          <button onClick={handleMoreReviews}>More Reviews</button>
        </div>
      );
    }
  }

}

export default MoreReviews;
