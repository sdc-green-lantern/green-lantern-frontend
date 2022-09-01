import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import RatingsReviewsCSS from './RatingsReviews.module.css';
import FormModalCSS from './FormModal.module.css';

export default class FormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      remainingChars: 50,
    };
    this.handleReviewBodyChange = this.handleReviewBodyChange.bind(this);
  }

  handleReviewBodyChange(event) {
    const reviewLength = event.target.value.length;
    const remainingChars = reviewLength < 50 ? 50 - reviewLength : 0;
    this.setState({ remainingChars });
  }

  render() {
    const { close, productName } = this.props;
    const { remainingChars } = this.state;
    return (
      <div className={FormModalCSS.formModalBackground}>
        <div className={FormModalCSS.formModalContainer}>
          <h2>Write Your Review</h2>
          <h4>{`About the ${productName}`}</h4>
          <div>
            <button
              onClick={close}
              className={FormModalCSS.button}
              type="button"
            >
              Close
            </button>
          </div>

          <div>
            Star Rating:
            <select>
              <option defaultValue value={null}>--Select a Rating--</option>
              <option value={1}>★</option>
              <option value={2}>★★</option>
              <option value={3}>★★★</option>
              <option value={4}>★★★★</option>
              <option value={5}>★★★★★</option>
            </select>
          </div>
          <div>
            Do you recommend this product?
          </div>
          <div>
            Characteristics:
            Size
            Width
            Comfort
            Quality
            Length
            Fit
          </div>
          <div>
            <label htmlFor="review_summary">
              <p>Review Summary</p>
              <input
                id="review_summary"
                name="review_summary"
                placeholder="Example: Best purchase ever!"
                type="text"
                maxLength="60"
                size="50"
              />
            </label>
          </div>
          <div>
            <label htmlFor="review_body">
              <p>Review Body:</p>
              <textarea
                id="review_body"
                name="review_body"
                className={FormModalCSS.review_body}
                rows="10"
                cols="100"
                placeholder="Why did you like the product or not?"
                onChange={this.handleReviewBodyChange}
                // minLength="50"
                // maxLength="1000"
                // size="100"
              />
            </label>
            <p>{(remainingChars > 0 && `Minimum required characters left: ${remainingChars}`)}</p>
          </div>
          <div>
            Upload your photos
          </div>
          <div>
            <label htmlFor="displayName">
              <p>What is your nickname?</p>
              <input id="displayName" type="text" maxLength="60" size="50" />
            </label>
            <p>For privacy reasons, do not use your full name or email address.</p>
          </div>
          <div>
            <label htmlFor="email">
              <p>What is your email?</p>
              <input
                id="email"
                name="email"
                type="email"
                maxLength="60"
                size="50"
              />
            </label>
            <p>For authentication reasons, you will not be emailed.</p>
          </div>
          <div>
            <button
              // onClick={close}
              className={FormModalCSS.button}
              // type="button"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
