import React from 'react';
import RatingsReviewsCSS from './RatingsReviews.module.css';
import FormModal from './FormModal.jsx';

export default class NewReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleSubmitForm() {
    console.log('You clicked submit!');
  }

  render() {
    const { productName, characteristics, axiosConfig, IMGBB_API_KEY } = this.props;
    const { showModal } = this.state;
    return (
      <>
        <button
          className={RatingsReviewsCSS.button}
          type="button"
          onClick={() => { this.setState({ showModal: true }); }}
        >
          ADD A REVIEW+
        </button>
        {showModal && (
          <FormModal
            productName={productName}
            characteristics={characteristics}
            axiosConfig={axiosConfig}
            IMGBB_API_KEY={IMGBB_API_KEY}
            close={() => { this.setState({ showModal: false }); }}
            submit={this.handleSubmitForm}
          />
          // <div>Hello there!</div>
        )}
      </>
    );
  }
}