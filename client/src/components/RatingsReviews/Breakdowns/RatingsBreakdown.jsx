import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegStar, faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import Stars from '../../Stars/Stars.jsx';
import RatingsBreakdownCSS from './RatingsBreakdown.module.css';

export default class RatingsBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      avgRating, pctRecommend,
      ratingProportions, ratingCounts,
      toggleFilter, selectedRatings, handleSort,
    } = this.props;

    const ratings = Object.keys(ratingProportions).reverse();
    const proportions = Object.values(ratingProportions).reverse();
    console.log(ratingCounts);
    const ratingsBar = ratings.map((rating, index) => (
      <div
        key={rating}
        className={RatingsBreakdownCSS.proportions_box}
        onClick={(e) => toggleFilter(e, rating)}
        role='button'
        tabIndex="-1"
      >
        {`${rating} Stars`}
        {/* {proportions[index]} */}
        <div className={RatingsBreakdownCSS.ratings_bar}>
          <span
            className={RatingsBreakdownCSS.ratings_bar_overlay}
            style={{ width: `${Math.round(100 * proportions[index])}%` }}
          />
        </div>
        {`${ratingCounts[rating] !== undefined ? ratingCounts[rating] : 0}`}
      </div>
    ));

    const filters = selectedRatings.map((num) => {
      return (
        <div>{`- ${num} Stars`}</div>
      );
    });

    return (
      <div className={RatingsBreakdownCSS.breakdown_container}>
        <div className={RatingsBreakdownCSS.top_box}>
          <div>
            <h1>{avgRating}</h1>
          </div>
          <Stars averageRating={avgRating} />
        </div>
        <div className={RatingsBreakdownCSS.recommmend_box}>
          <p>{`${pctRecommend} of reviews recommend this product.`}</p>
        </div>
        <div>
          {ratingsBar}
        </div>
        <div>
          {selectedRatings.length > 0 ? (
            <>
              Filters applied. Displaying reviews with:
              {filters}
              <input
                type="submit"
                value="Remove all filters"
                onClick={() => handleSort(undefined, [])}
              />
            </>
          )
            : (<></>)
          }
        </div>
      </div>
    );
  }
}
