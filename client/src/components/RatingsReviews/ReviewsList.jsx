import React from 'react';
import ReviewTile from './ReviewTile.jsx';
import RatingsReviewsCSS from './RatingsReviews.module.css';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { displayedReviews, axiosConfig, handleGetReviews } = this.props;
    // console.log('Reviews: ', displayedReviews);

    // create individual review tile components
    const reviewTiles = displayedReviews.map((review) => (
      <ReviewTile
        axiosConfig={axiosConfig}
        key={review.review_id}
        review={review}
        handleGetReviews={handleGetReviews}
      />
    ));

    if (reviewTiles.length > 0) {
      return (
        <>
          {reviewTiles}
        </>
      );
    } else {
      return (
        <></>
      )
    }

  }
}

export default ReviewsList;
