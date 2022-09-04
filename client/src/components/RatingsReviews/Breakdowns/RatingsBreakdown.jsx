import React from 'react';

export default class RatingsBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avgRating: 0,
      pctRecommend: '',
    };
    this.calculateAverageRating = this.calculateAverageRating.bind(this);
    this.calculatePercentRecommend = this.calculatePercentRecommend.bind(this);
  }

  componentDidMount() {
    const { metadata } = this.props;
    console.log("Metadata: ", metadata);
    if (Object.keys(metadata).length > 0) {
      this.calculateAverageRating();
      this.calculatePercentRecommend();
    }
  }

  calculateAverageRating() {
    const { metadata } = this.props;
    console.log("Metadata Ratings: ", metadata.ratings);
    const ratings = Object.keys(metadata.ratings);
    const counts = Object.values(metadata.ratings);
    let denominator = 0;
    let numerator = 0;
    for (let i = 0; i < ratings.length; i++) {
      denominator += Number(counts[i]);
      numerator += Number(ratings[i]) * Number(counts[i]);
    }
    const avgRating = numerator / denominator;
    console.log("Average Rating: ", avgRating);
    this.setState({ avgRating });
  }

  calculatePercentRecommend() {
    const { metadata } = this.props;
    console.log("Metadata Recommended: ", metadata.recommended);
    const numerator = metadata.recommended.true;
    const denominator = metadata.recommended.true + metadata.recommended.false;
    const pctRecommend = numerator / denominator;
    console.log("Percent Recommend: ", pctRecommend);

    this.setState({ pctRecommend });
  }

  render() {
    const { avgRating, pctRecommend } = this.state;
    return (
      <div>
        <p>{`Average Rating: ${avgRating}`}</p>
        <p>{`Pct Recommend: ${pctRecommend}`}</p>
      </div>
    );
  }
}
