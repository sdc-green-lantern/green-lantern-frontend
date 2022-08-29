import React from 'react';
import ReviewTile from './ReviewTile.jsx';
// import instance from '../../axiosConfig.js'

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.state = {
    //   reviews: [],
    //   displayedReviews: [],
    // };
  }

  // componentDidMount() {
  //   // GET reviews
  //   const { productId, axiosConfig } = this.props;
  //   const productURL = '/reviews/?product_id=' + productId;

  //   axiosConfig.get(productURL)
  //     .then((response) => {
  //       this.setState({ reviews: response.data.results });
  //       this.setState({ displayedReviews: response.data.results.slice(0, 2) });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   // set state of reviews to retrieved reviews
  //   // set state of displayedReviews to be first 2 of reviews
  // }

  render() {
    // const { reviews, displayedReviews } = this.state;
    const { reviews, displayedReviews } = this.props;
    console.log("Reviews: ", displayedReviews);

    // create individual review tile components
    const reviewTiles = displayedReviews.map((review) => {
      return <ReviewTile key={review.review_id} review={review}/>;
    });

    return (
      <div>
        {reviewTiles}
      </div>
    );

    // // if there are 1-2 reviews
    // if (reviews.length > 0 && reviews.length <= 2) {
    //   // render displayedReviews
    //   // do not show the "More Reviews" button
    //   return (
    //     <div>
    //       {reviewTiles}
    //     </div>
    //   );
    // }
    // if (reviews.length > 2) {
    //   return (
    //   // render displayedReviews
    //   // show the "More Reviews" button
    //     <div>
    //       {reviewTiles}
    //       {/* <button type="submit">More Reviews</button> */}
    //     </div>
    //   );
    // }
    // return (
    //   // render just the button to "Write New Review"
    //   <button type="submit">Write New Review</button>
    // );
  }
}

export default ReviewsList;
