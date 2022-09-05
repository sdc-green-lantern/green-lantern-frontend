import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegStar, faCircleXmark } from '@fortawesome/free-regular-svg-icons';

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
    } = this.props;

    const ratings = Object.keys(ratingProportions).reverse();
    const proportions = Object.values(ratingProportions).reverse();
    const ratingsBar = ratings.map((rating, index) => (
      <div key={rating} className={RatingsBreakdownCSS.proportions_box}>
        {`${rating} Stars`}
        {/* {proportions[index]} */}
        <div className={RatingsBreakdownCSS.grey_bar} />
      </div>
    ));

    return (
      <div className={RatingsBreakdownCSS.breakdown_container}>
        <div className={RatingsBreakdownCSS.top_box}>
          <div>
            <h1>{avgRating}</h1>
          </div>
          <div className={RatingsBreakdownCSS.rating}>
            <div
              className={RatingsBreakdownCSS.rating_overlay}
              style={{ width: `${avgRating * 20}%` }}
            />
            {/* <div className={RatingsBreakdownCSS.star}>☆</div>
              <div className={RatingsBreakdownCSS.star}>☆</div>
              <div className={RatingsBreakdownCSS.star}>☆</div>
              <div className={RatingsBreakdownCSS.star}>☆</div>
              <div className={RatingsBreakdownCSS.star}>☆</div> */}
            <FontAwesomeIcon icon={faStar} size="lg" className={RatingsBreakdownCSS.star} />
            <FontAwesomeIcon icon={faStar} size="lg" className={RatingsBreakdownCSS.star} />
            <FontAwesomeIcon icon={faStar} size="lg" className={RatingsBreakdownCSS.star} />
            <FontAwesomeIcon icon={faStar} size="lg" className={RatingsBreakdownCSS.star} />
            <FontAwesomeIcon icon={faStar} size="lg" className={RatingsBreakdownCSS.star} />
          </div>
        </div>
        <div className={RatingsBreakdownCSS.recommmend_box}>
          <p>{`${pctRecommend} of reviews recommend this product.`}</p>
        </div>
        <div>
          {ratingsBar}
        </div>
      </div>
    );
  }
}
