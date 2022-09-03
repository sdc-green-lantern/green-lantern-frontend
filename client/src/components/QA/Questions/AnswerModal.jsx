import React from 'react';
import axios from 'axios';
import AModalCSS from './AnswerModal.module.css';
import axiosConfig, { IMGBB_API_KEY } from '../../../../../axiosConfig.js';

class AnswerModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
    this.state = {
      photos: [],
      imgFileURLs: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handlePhotos = (e) => {
    const { photos, imgFileURLs } = this.state;
    photos.push(e.target.value);
    this.setState({ photos });

    if (photos.length >= 5) {
      this.setState({ showUploadButton: false });
    }

    const body = new FormData();
    body.set('key', IMGBB_API_KEY);
    body.append('image', e.target.files[0]);
    console.log(body);

    axios({
      method: 'post',
      url: 'https://api.imgbb.com/1/upload',
      data: body,
    })
      .then((response) => {
        // console.log(response);
        console.log(response.data.data.display_url);
        imgFileURLs.push(response.data.data.display_url);
        this.setState({ imgFileURLs });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  submitAnswer = () => {
    const { question, hideModal, getAnswers } = this.props;
    const { question_id } = question;
    const {
      body, name, email, imgFileURLs,
    } = this.state;
    console.log(this.state);
    axiosConfig.post(`/qa/questions/${question_id}/answers`, {
      body, name, email, photos: imgFileURLs,
    })
      .then((response) => {
        hideModal();
        getAnswers();
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { hideModal, question, productName } = this.props;
    const { question_body } = question;
    const { imgFileURLs } = this.state;
    const displayPhotos = imgFileURLs.map((url) => (
      <div className={AModalCSS.imgContainer}>
        <img
          src={url}
          alt=""
          className={AModalCSS.thumbnail_img}
        />
      </div>
    ));
    return (
      <div className={AModalCSS.modalBackground}>
        <div className={AModalCSS.modalContainer}>
          <div className={AModalCSS.exitButton}>
            <button type="submit" className={AModalCSS.exitBtn} onClick={hideModal}>X</button>
          </div>
          <h2 className={AModalCSS.title}>Submit Your Answer</h2>
          <h4 className={AModalCSS.subtitle}>
            {`${productName}: ${question_body}`}
          </h4>
          <div className={AModalCSS.body}>
            <div>
              <div>Your Answer:</div>
              <textarea placeholder="Answer away..." maxLength="1000" rows="4" cols="60" name="body" onChange={(e) => { this.handleChange(e); }} />
            </div>
            <div>
              <div>What is your nickname:</div>
              <input type="type" placeholder="Example: jack543!" name="name" onChange={(e) => { this.handleChange(e); }} />
              <div className={AModalCSS.security}>
                For privacy reasons, do not use your full name or email address
              </div>
            </div>
            <div>
              <div>Your email:</div>
              <input type="email" placeholder="Example: jack@email.com" name="email" onChange={(e) => { this.handleChange(e); }} />
              <div className={AModalCSS.security}>
                For authentication reasons, you will not be emailed
              </div>
            </div>
            <div>
              <div>Upload you photos:</div>
              <input type="file" onChange={(e) => { this.handlePhotos(e); }} />
              {displayPhotos}
            </div>

          </div>
          <div className={AModalCSS.footer}>
            <button type="submit" className={AModalCSS.submitBtn} onClick={this.submitAnswer}>Submit answer</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AnswerModal;
