import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import RatingsReviewsCSS from './RatingsReviews.module.css';
import FormModalCSS from './FormModal.module.css';

export default class FormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { close } = this.props;
    return (
      <div className={FormModalCSS.formModalBackground}>
        <div className={FormModalCSS.formModalContainer}>
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
            Review Summary
          </div>
          <div>
            Review Body
          </div>
          <div>
            Upload your photos
          </div>
          <div>
            <p>What is your nickname?</p>
            <input type="text" maxLength="60" size="50" />
            <p>For privacy reasons, do not use your full name or email address.</p>
          </div>
          <div>
            What is your email?
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
