import React from 'react';
import RatingsReviewsCSS from './RatingsReviews.module.css';
import ReviewImageModalCSS from './ReviewImageModal.module.css';

export default class ReviewImageModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { show, close } = this.props;
    if (!show) {
      return null;
    }
    return (
      <div>
        <div>{this.props.children}</div>
        <button onClose={close}>Close</button>
      </div>

    );
  }
}
