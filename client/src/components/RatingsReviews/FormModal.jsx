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
              className={RatingsReviewsCSS.button}
              type="button"
            >
              {/* <FontAwesomeIcon icon={faWindowClose} /> */}
              Close
            </button>
          </div>
          {/* <div>
            <img src={photo.url} alt={photo.id} />
          </div> */}
        </div>
      </div>
    );
  }
}
