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
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  handleReviewBodyChange(event) {
    const reviewLength = event.target.value.length;
    const remainingChars = reviewLength < 50 ? 50 - reviewLength : 0;
    this.setState({ remainingChars });
  }

  handleFormSubmission(event) {
    console.log(event);
  }

  render() {
    const { close, productName } = this.props;
    const { remainingChars } = this.state;
    return (
      <div className={FormModalCSS.formModalBackground}>
        <div className={FormModalCSS.formModalContainer}>
          {/* TO-DO: Button not responding to import from CSS */}
          <div>
            <div
              className={FormModalCSS.modal_button}
              onClick={close}
              style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
            >
              Cancel
            </div>
          </div>
          <div>
            <h1>Write Your Review</h1>
            <h4>{`About the ${productName}`}</h4>
          </div>
          <div>
            Overall Rating*
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
            <p>Do you recommend this product?*</p>
            <div className={FormModalCSS.recommendation}>
              <label htmlFor="yes">
                Yes
                <input
                  className={FormModalCSS.radio_input}
                  type="radio"
                  id="yes"
                  name="recommendation"
                  value="yes"
                />
              </label>
              <label htmlFor="no">
                No
                <input
                  className={FormModalCSS.radio_input}
                  type="radio"
                  id="radio_no"
                  name="recommendation"
                  value="no"
                />
              </label>
            </div>
          </div>
          <div>
            <p>
              Characteristics*
              Size
              Width
              Comfort
              Quality
              Length
              Fit
            </p>
          </div>
          <div className={FormModalCSS.reviewContainer}>
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
              <p>Review Body*</p>
              <textarea
                id="review_body"
                name="review_body"
                className={FormModalCSS.review_body}
                rows="10"
                cols="100"
                placeholder="Why did you like the product or not?"
                onChange={this.handleReviewBodyChange}
              />
            </label>
            {(remainingChars > 0 && `Minimum required characters left: ${remainingChars}`)}
          </div>
          <div>
            <p>Upload your photos</p>
          </div>
          <div>
            <label htmlFor="displayName">
              <p>What is your nickname?*</p>
              <input id="displayName" type="text" maxLength="60" size="50" />
            </label>
            <p>For privacy reasons, do not use your full name or email address.</p>
          </div>
          <div>
            <label htmlFor="email">
              <p>Your email*</p>
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
            <div
              className={FormModalCSS.modal_button}
              onClick={this.handleFormSubmission}
              style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0px 0px 10px'}}
            >
              Submit
            </div>
          </div>
        </div>
      </div>
    );
  }
}
