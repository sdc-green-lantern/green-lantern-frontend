import React from 'react';
import RatingsReviewsCSS from './RatingsReviews.module.css';
import ReviewsList from './ReviewsList.jsx';
import MoreReviews from './MoreReviews.jsx';
import SortOptions from './SortOptions.jsx';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      displayedReviews: [],
      numReviews: 0,
      numDisplayed: 0,
      sortOption: 'relevant', // newest, helpful, relevant
    };

    this.handleMoreReviews = this.handleMoreReviews.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  componentDidMount() {
    const { productId, axiosConfig } = this.props;
    const productURL = `/reviews/?sort=relevant&product_id=${productId}&count=1000`;

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

  handleMoreReviews() {
    const { reviews, numReviews, numDisplayed } = this.state;
    const newNumDisplayed = numDisplayed + 2 > numReviews ? numReviews : numDisplayed + 2;
    const newDisplayedReviews = reviews.slice(0, newNumDisplayed);
    this.setState({
      displayedReviews: newDisplayedReviews,
      numDisplayed: newNumDisplayed,
    });
  }

  handleSort(event) {
    const { productId, axiosConfig } = this.props;
    const sortOption = event.target.value;
    const productURL = `/reviews/?sort=${sortOption}&product_id=${productId}&count=1000`;

    axiosConfig.get(productURL)
      .then((response) => {
        const reviews = response.data.results;
        const displayedReviews = response.data.results.slice(0, 2);
        this.setState({
          reviews,
          displayedReviews,
          numReviews: reviews.length,
          numDisplayed: displayedReviews.length,
          sortOption,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { axiosConfig, productId } = this.props;
    const {
      reviews, displayedReviews, numReviews, numDisplayed,
    } = this.state;
    return (
      <div className={RatingsReviewsCSS.ratings_section}>
        <div className={RatingsReviewsCSS.ratings_container}>
          <div className={RatingsReviewsCSS.ratings_header} data-testid="RatingsReviews-header">
            RATINGS & REVIEWS
          </div>
          <div className={RatingsReviewsCSS.ratings_breakdown_sidebar}>
            <p>Ratings Breakdown</p>
          </div>
          <div className={RatingsReviewsCSS.product_breakdown_sidebar}>
            <p>Product Breakdown</p>
          </div>
          <div className={RatingsReviewsCSS.sort_options}>
            <SortOptions
              numReviews={numReviews}
              handleSort={this.handleSort}
            />
          </div>
          <div className={RatingsReviewsCSS.reviews_list}>
            <ReviewsList
              axiosConfig={axiosConfig}
              productId={productId}
              reviews={reviews}
              displayedReviews={displayedReviews}
            />
          </div>
          <div className={RatingsReviewsCSS.more_reviews_btn_box}>
            <MoreReviews
              handleMoreReviews={this.handleMoreReviews}
              numReviews={numReviews}
              numDisplayed={numDisplayed}
            />
          </div>
          <div className={RatingsReviewsCSS.write_new_review_btn_box}>
            <p>Add a Review</p>
            <button
              className={RatingsReviewsCSS.button}
              type="button"
            >
              ADD A REVIEW+
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default RatingsReviews;
