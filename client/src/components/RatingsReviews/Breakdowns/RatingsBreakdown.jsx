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
        <div className={RatingsBreakdownCSS.grey_bar} />
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
          {/*
          <div className={RatingsBreakdownCSS.rating}>
            <div
              className={RatingsBreakdownCSS.rating_overlay}
              style={{ width: `${avgRating * 20}%` }}
            />
            <div className={RatingsBreakdownCSS.star}>☆</div>
              <div className={RatingsBreakdownCSS.star}>☆</div>
              <div className={RatingsBreakdownCSS.star}>☆</div>
              <div className={RatingsBreakdownCSS.star}>☆</div>
              <div className={RatingsBreakdownCSS.star}>☆</div>
            <FontAwesomeIcon icon={faStar} size="lg" className={RatingsBreakdownCSS.star} />
            <FontAwesomeIcon icon={faStar} size="lg" className={RatingsBreakdownCSS.star} />
            <FontAwesomeIcon icon={faStar} size="lg" className={RatingsBreakdownCSS.star} />
            <FontAwesomeIcon icon={faStar} size="lg" className={RatingsBreakdownCSS.star} />
            <FontAwesomeIcon icon={faStar} size="lg" className={RatingsBreakdownCSS.star} />
          </div>
          */}
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
          :
          (<></>)
          }
        </div>
      </div >
    );
  }
}
