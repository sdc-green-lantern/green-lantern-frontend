import React from 'react';

class SortOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { numReviews, handleSort } = this.props;
    return (
      <div>
        {`${numReviews} reviews, ordered by `}
        <select onChange={handleSort}>
          <option selected value="relevant">Relevance</option>
          <option value="helpful">Helpfulness</option>
          <option value="newest">Newest</option>
        </select>
      </div>
    );
  }
}

export default SortOptions;
