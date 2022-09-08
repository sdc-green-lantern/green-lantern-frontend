import React from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
// import stars from '../Stars/Stars.module.css';

import RatingsReviewsCSS from './RatingsReviews.module.css';
import FormModalCSS from './FormModal.module.css';

export default class FormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      hover: 0,
      recommendation: null,
      characteristics: {},
      reviewSummary: '',
      reviewBody: '',
      imgFileURLs: [],
      displayName: '',
      email: '',
      remainingChars: 50,
      imgFilePaths: [],
      showUploadButton: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleNumericChange = this.handleNumericChange.bind(this);
    this.handleCharacteristicsChange = this.handleCharacteristicsChange.bind(this);
    this.handleReviewBodyChange = this.handleReviewBodyChange.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.handleFormValidation = this.handleFormValidation.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.setRating = this.setRating.bind(this);
    this.setHover = this.setHover.bind(this);
  }

  componentDidMount() {
    const { characteristics } = this.props;
    const keys = Object.keys(characteristics);
    const newCharacteristics = {};
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const { id } = characteristics[key];
      newCharacteristics[id] = null;
    }
    this.setState({ characteristics: newCharacteristics });
  }

  handleChange(event) {
    // console.log(event.target);
    // console.log(event.target.name);
    // console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleNumericChange(event) {
    this.setState({
      [event.target.name]: Number(event.target.value),
    });
  }

  handleCharacteristicsChange(event) {
    // console.log(event.target.value);
    const { characteristics } = this.state;
    characteristics[event.target.name] = Number(event.target.value);
    // console.log(characteristics);
    this.setState({ characteristics });
  }

  handleReviewBodyChange(event) {
    const reviewLength = event.target.value.length;
    const remainingChars = reviewLength < 50 ? 50 - reviewLength : 0;
    this.setState({ remainingChars });
    this.setState({ [event.target.name]: event.target.value });
  }

  handleImageUpload(event) {
    const { IMGBB_API_KEY } = this.props;
    const { imgFilePaths, imgFileURLs } = this.state;

    const filePath = event.target.value;
    imgFilePaths.push(filePath);
    this.setState({ imgFilePaths });

    if (imgFilePaths.length >= 5) {
      this.setState({ showUploadButton: false });
    }

    const body = new FormData();
    body.set('key', IMGBB_API_KEY);
    body.append('image', event.target.files[0]);

    axios({
      method: 'post',
      url: 'https://api.imgbb.com/1/upload',
      data: body,
    })
      .then((response) => {
        // console.log(response);
        // console.log(response.data.data.display_url);
        imgFileURLs.push(response.data.data.display_url);
        this.setState({ imgFileURLs });
        // console.log(imgFileURLs);
        // console.log(imgFilePaths);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleFormValidation(event) {
    event.preventDefault();

    let isValid = true;
    let warning = 'You must enter the following: ';
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const {
      rating, recommendation, characteristics,
      displayName, email, remainingChars,
      imgFilePaths, imgFileURLs,
    } = this.state;

    if (rating === 0) {
      isValid = false;
      warning += '\n - valid rating';
    }

    if (recommendation === null) {
      isValid = false;
      warning += '\n - valid recommendation';
    }

    if (Object.values(characteristics).includes(null)) {
      isValid = false;
      warning += '\n - valid characteristics';
    }

    if (remainingChars > 0) {
      isValid = false;
      warning += '\n - valid review body';
    }

    if (imgFilePaths.length !== imgFileURLs.length) {
      isValid = false;
      warning += ' valid image file type';
    }

    if (displayName.length < 1) {
      isValid = false;
      warning += '\n - valid nickname';
    }

    if (email.length < 1 || regex.test(email) === false) {
      isValid = false;
      warning += '\n - valid email';
    }

    // warning = warning.slice(0, warning.length - 1);
    if (isValid) {
      this.submitForm();
    } else {
      alert(warning);
    }
  }

  submitForm() {
    const {
      rating, recommendation, characteristics, reviewSummary,
      reviewBody, imgFileURLs, displayName, email,
    } = this.state;
    const {
      axiosConfig, productId, updateReviews, close,
    } = this.props;
    const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp/reviews/';
    const body = {
      product_id: productId,
      rating,
      summary: reviewSummary,
      body: reviewBody,
      recommend: recommendation === 'true',
      name: displayName,
      email,
      photos: imgFileURLs,
      characteristics,
    };

    axiosConfig.post(url, body)
      .then((response) => {
        alert('Form successfully submitted!');
        updateReviews();
        close();
      })
      .catch((error) => {
        console.log(error);
        console.log('Form not submitted.');
      });
  }

  setHover(data) {
    this.setState({ hover: data });
  }

  setRating(data) {
    this.setState({ rating: data });
  }

  render() {
    const {
      close, productName, characteristics, featureRatings,
    } = this.props;
    const {
      remainingChars, imgFileURLs, showUploadButton, rating, hover
    } = this.state;
    const photos = imgFileURLs.map((url) => (
      <div>
        <img
          src={url}
          alt=""
          className={FormModalCSS.thumbnail_img}
        />
      </div>
    ));

    const characteristicsHeader = (
      <tr>
        <th>&nbsp;</th>
        {[1, 2, 3, 4, 5].map((rating) => (
          <th>{rating}</th>
        ))}
      </tr>
    );

    const characteristicsRows = Object.keys(characteristics).map((feature, index) => (
      <tr>
        <th key={index}>{feature}</th>
        {[1, 2, 3, 4, 5].map((rating) => (
          <td>
            <label htmlFor={feature}>
              {featureRatings[feature][rating - 1]}
              <input
                key={feature}
                className={FormModalCSS.radio_input}
                type="radio"
                id={characteristics[feature].id}
                name={characteristics[feature].id}
                value={rating}
                onChange={this.handleCharacteristicsChange}
              />
            </label>
          </td>
        ))}
      </tr>
    ));

    return (
      <div className={FormModalCSS.formModalBackground}>
        <div className={FormModalCSS.formModalContainer}>
          <div>
            <input
              type="submit"
              value="Cancel"
              className={FormModalCSS.modal_button}
              onClick={close}
            />
          </div>
          <div>
            <h1>Write Your Review</h1>
            <h4>{`About the ${productName}`}</h4>
          </div>
          <form>
            <div>
              Overall Rating*
              <div className={FormModalCSS.star_rating}>
                {[...Array(5)].map((star, index) => {
                  index += 1;
                  return (
                    <button
                      type="button"
                      key={index}
                      className={FormModalCSS.button_settings}
                      onClick={() => this.setRating(index)}
                      onMouseEnter={() => this.setHover(index)}
                      onMouseLeave={() => this.setHover(rating)}
                    >
                      <FontAwesomeIcon
                        icon={faStar}
                        size="lg"
                        className={index <= (hover || rating) ? FormModalCSS.on : FormModalCSS.off}
                      />
                    </button>
                  );
                })}
              </div>
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
                    value={true}
                    onChange={this.handleChange}
                    required
                  />
                </label>
                <label htmlFor="no">
                  No
                  <input
                    className={FormModalCSS.radio_input}
                    type="radio"
                    id="radio_no"
                    name="recommendation"
                    value={false}
                    onChange={this.handleChange}
                    required
                  />
                </label>
              </div>
            </div>
            <div>
              <p>Characteristics*</p>
              <table>
                <thead>
                  {characteristicsHeader}
                </thead>
                <tbody>
                  {characteristicsRows}
                </tbody>
              </table>
            </div>
            <div className={FormModalCSS.reviewContainer}>
              <label htmlFor="reviewSummary">
                <p>Review Summary</p>
                <input
                  id="reviewSummary"
                  name="reviewSummary"
                  placeholder="Example: Best purchase ever!"
                  type="text"
                  maxLength="60"
                  size="50"
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="reviewBody">
                <p>Review Body*</p>
                <textarea
                  id="reviewBody"
                  name="reviewBody"
                  className={FormModalCSS.review_body}
                  rows="10"
                  cols="100"
                  placeholder="Why did you like the product or not?"
                  onChange={this.handleReviewBodyChange}
                  // required
                />
              </label>
              {(remainingChars > 0 && `Minimum required characters left: ${remainingChars}`)}
            </div>
            <div>
              <p>Upload your photos</p>
              {showUploadButton && (
              <label htmlFor="upload-images">
                <input
                  type="file"
                  id="upload-images"
                  name="upload-images"
                  accept="image/png, image/jpeg"
                  onChange={this.handleImageUpload}
                />
              </label>
              )}
              <div>
                {photos}
              </div>
            </div>
            <div>
              <label htmlFor="displayName">
                <p>What is your nickname?*</p>
                <input
                  id="displayName"
                  name="displayName"
                  type="text"
                  maxLength="60"
                  size="50"
                  onChange={this.handleChange}
                  // required
                />
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
                  onChange={this.handleChange}
                  // required
                />
              </label>
              <p>For authentication reasons, you will not be emailed.</p>
            </div>
            <input
              type="submit"
              value="Submit"
              className={FormModalCSS.modal_button}
              onClick={this.handleFormValidation}
            />
          </form>
        </div>
      </div>
    );
  }
}
