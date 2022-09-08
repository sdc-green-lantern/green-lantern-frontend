import React from 'react';
import RatingsReviewsCSS from '../RatingsReviews.module.css';
import FormModal from '../Modals/FormModal.jsx';

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
    const {
      productId, productName, characteristics,
      axiosConfig, IMGBB_API_KEY, updateReviews,
      featureRatings,
    } = this.props;
    // console.log("Characteristics: ");
    // console.log(characteristics);
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
            productId={productId}
            productName={productName}
            characteristics={characteristics}
            axiosConfig={axiosConfig}
            IMGBB_API_KEY={IMGBB_API_KEY}
            updateReviews={updateReviews}
            close={() => { this.setState({ showModal: false }); }}
            submit={this.handleSubmitForm}
            featureRatings={featureRatings}
          />
        )}
      </>
    );
  }
}