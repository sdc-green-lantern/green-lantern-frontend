import React from 'react';
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

    // const ratingsBar = ratingProportions.m

    return (
      <div>
        <div className={RatingsBreakdownCSS.top_box}>
          <div>
            <h1>{avgRating}</h1>
          </div>
          <div>
            ★★★★★
          </div>
        </div>
        <div className={RatingsBreakdownCSS.recommmend_box}>
          <p>{`${pctRecommend} of reviews recommend this product.`}</p>
        </div>
        <div className={RatingsBreakdownCSS.proportions_box}>
          <p>{`Rating Proportions: ${ratingProportions}`}</p>
        </div>
      </div>
    );
  }
}
