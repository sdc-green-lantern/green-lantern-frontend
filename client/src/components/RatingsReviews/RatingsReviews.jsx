import React from 'react';
import _ from 'underscore';

import RatingsReviewsCSS from './RatingsReviews.module.css';
import ReviewsList from './ReviewsList.jsx';
import MoreReviews from './MoreReviews.jsx';
import SortOptions from './SortOptions.jsx';
import NewReview from './NewReview.jsx';
import RatingsBreakdown from './Breakdowns/RatingsBreakdown.jsx';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      reviews: [],
      displayedReviews: [],
      numReviews: 0,
      numDisplayed: 0,
      sortOption: 'relevant', // newest, helpful, relevant
      metadata: {},
      avgRating: 0,
      pctRecommend: '',
      ratingProportions: {},
      ratingCounts: {},
      selectedRatings: [1, 2, 3, 4, 5],
    };

    this.updateReviews = this.updateReviews.bind(this);
    this.updateProductName = this.updateProductName.bind(this);
    this.updateMetadata = this.updateMetadata.bind(this);
    this.handleGetReviews = this.handleGetReviews.bind(this);
    this.handleMoreReviews = this.handleMoreReviews.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.calculateRatings = this.calculateRatings.bind(this);
    this.calculatePercentRecommend = this.calculatePercentRecommend.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
  }

  componentDidMount() {
    this.updateReviews();
    this.updateProductName();
    this.updateMetadata();
  }

  handleGetReviews() {
    const { productId, axiosConfig } = this.props;
    const productURL = `/reviews/?sort=relevant&product_id=${productId}&count=1000`;

    const { numDisplayed } = this.state;

    axiosConfig.get(productURL)
      .then((response) => {
        const reviews = response.data.results;
        this.setState({
          reviews,
          displayedReviews: reviews.slice(0, numDisplayed),
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

  updateReviews() {
    const { productId, axiosConfig } = this.props;
    const reviewsURL = `/reviews/?sort=relevant&product_id=${productId}&count=1000`;

    axiosConfig.get(reviewsURL)
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

  updateProductName() {
    const { productId, axiosConfig } = this.props;
    const productNameURL = `/products/${productId}`;

    axiosConfig.get(productNameURL)
      .then((response) => {
        this.setState({ productName: response.data.name });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateMetadata() {
    const { productId, axiosConfig } = this.props;
    const metaURL = `/reviews/meta?product_id=${productId}`;

    axiosConfig.get(metaURL)
      .then((response) => {
        // console.log("Update Metadata Response: ", response.data);
        this.setState({ metadata: response.data });
        this.calculateRatings(response.data);
        this.calculatePercentRecommend(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  calculateRatings(metadata) {
    // console.log("Metadata Ratings: ", metadata);
    const ratings = Object.keys(metadata.ratings);
    const counts = Object.values(metadata.ratings);
    const ratingProportions = {};
    let denominator = 0;
    let numerator = 0;
    for (let i = 0; i < ratings.length; i++) {
      denominator += Number(counts[i]);
      numerator += Number(ratings[i]) * Number(counts[i]);
    }
    for (let i = 0; i < ratings.length; i++) {
      const key = ratings[i];
      ratingProportions[key] = Number(counts[i]) / denominator;
    }
    const avgRating = Math.round(10 * (numerator / denominator)) / 10;
    // console.log("Average Rating: ", avgRating);
    // console.log("Average Rating: ", ratingProportions);
    this.setState({ avgRating, ratingProportions, ratingCounts: ratings });
  }

  calculatePercentRecommend(metadata) {
    // console.log("Metadata Recommended: ", metadata.recommended);
    const numerator = metadata.recommended.true;
    const denominator = metadata.recommended.true + metadata.recommended.false;
    const pctRecommend = String(Math.round(100 * (numerator / denominator)));
    // console.log("Percent Recommend: ", pctRecommend);
    this.setState({ pctRecommend: `${pctRecommend}%` });
  }

  toggleFilter(event, rating) {
    console.log(event);
    console.log(rating);

    let { selectedRatings, displayedReviews } = this.state;

    rating = Number(rating);
    if (!selectedRatings.includes(rating)) {
      selectedRatings.push(rating);
    } else if (selectedRatings.includes(rating)) {
      selectedRatings = _.filter(selectedRatings, function(num) {return num !== rating} );
    }
    if (selectedRatings.length === 0) {
      selectedRatings = [1, 2, 3, 4, 5];
    }
    this.setState({ selectedRatings });

    const filteredDisplayedReviews = _.filter(displayedReviews, function(review) {
      return selectedRatings.includes(review.rating)
    });
    console.log(selectedRatings);
    console.log(filteredDisplayedReviews);
    this.setState({ displayedReviews: filteredDisplayedReviews });
  }

  render() {
    const { axiosConfig, IMGBB_API_KEY, productId } = this.props;
    const {
      reviews, displayedReviews, numReviews, numDisplayed, productName, metadata,
      avgRating, pctRecommend, ratingProportions, ratingCounts, selectedRatings,
    } = this.state;
    return (
      <div className={RatingsReviewsCSS.ratings_section}>
        <div className={RatingsReviewsCSS.ratings_container}>
          <div className={RatingsReviewsCSS.ratings_header} data-testid="RatingsReviews-header">
            RATINGS & REVIEWS
            <span>
              Current Product Id:
              {productId}
            </span>
          </div>
          <div className={RatingsReviewsCSS.ratings_breakdown_sidebar}>
            <RatingsBreakdown
              toggleFilter={this.toggleFilter}
              productId={productId}
              // metadata={metadata}
              avgRating={avgRating}
              pctRecommend={pctRecommend}
              ratingProportions={ratingProportions}
              ratingCounts={ratingCounts}
            />
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
              handleGetReviews={this.handleGetReviews}
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
            <NewReview
              axiosConfig={axiosConfig}
              IMGBB_API_KEY={IMGBB_API_KEY}
              productName={productName}
              productId={productId}
              characteristics={metadata.characteristics}
              updateReviews={this.updateReviews}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default RatingsReviews;
