import React from 'react';
import instance from '../../axiosConfig.js'

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      displayedReviews: [],
    };
  }

  componentDidMount() {
    // GET reviews
    const { productId } = this.props;
    const productURL = '/reviews/?product_id=' + productId;

    instance.get(productURL)
      .then((response) => {
        this.setState({ reviews: response.data.results });
      })
      .catch((error) => {
        console.log(error);
      });

    // set state of reviews to retrieved reviews
    // set state of displayedReviews to be first 2 of reviews
  }

  render() {
    const { reviews, displayedReviews } = this.state;
    console.log("Reviews: ", reviews);
    // create individual review tile components

    // if there are 1-2 reviews
    if (reviews.length > 0 && reviews.length <= 2) {
      // render displayedReviews
      // do not show the "More Reviews" button
      return (
        <div>
          <p>Reviews List</p>
        </div>
      );
    }
    if (reviews.length > 2) {
      return (
      // render displayedReviews
      // show the "More Reviews" button
        <div>
          <button type="submit">More Reviews</button>
        </div>
      );
    } return (
      // render just the button to "Write New Review"
      <button type="submit">Write New Review</button>
    );
  }
}

export default ReviewsList;
