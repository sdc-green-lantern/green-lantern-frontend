import React from 'react';
import RatingsReviewsCSS from './RatingsReviews.module.css';
import ReviewsList from './ReviewsList.jsx';
import MoreReviews from './MoreReviews.jsx';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      displayedReviews: [],
      numReviews: 0,
      numDisplayed: 0,
    };

    this.handleMoreReviews = this.handleMoreReviews.bind(this);
  }

  componentDidMount() {
    // GET reviews
    const { productId, axiosConfig } = this.props;
    const productURL = '/reviews/?product_id=' + productId;

    axiosConfig.get(productURL)
      .then((response) => {
        const reviews = response.data.results;
        const displayedReviews = response.data.results.slice(0, 2);
        this.setState({
          reviews,
          displayedReviews,
          numReviews: reviews.length,
          numDisplayed: displayedReviews.length,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleMoreReviews(event) {
    const { reviews, numReviews, numDisplayed } = this.state;
    const newNumDisplayed = numDisplayed + 2 > numReviews ? numReviews : numDisplayed + 2;
    const newDisplayedReviews = reviews.slice(0, newNumDisplayed);
    this.setState({
      displayedReviews: newDisplayedReviews,
      numDisplayed: newNumDisplayed,
    });
  }

  render() {
    const { axiosConfig, productId} = this.props;
    const { reviews, displayedReviews, numReviews, numDisplayed } = this.state;
    console.log(numReviews, numDisplayed);
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
            <ReviewsList
              axiosConfig={axiosConfig}
              productId={productId}
              reviews={reviews}
              displayedReviews={displayedReviews}
            />
          </div>
          <div className={RatingsReviewsCSS.more_reviews_btn}>
            <MoreReviews
              handleMoreReviews={this.handleMoreReviews}
              numReviews={numReviews}
              numDisplayed={numDisplayed}
            />
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
