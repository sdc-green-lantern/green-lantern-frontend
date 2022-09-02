import React from 'react';
import AModalCSS from './AnswerModal.module.css';
import axiosConfig from '../../../../../axiosConfig.js';

class AnswerModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
    this.state = {
      photos: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handlePhotos = (e) => {
    const { photos } = this.state;
    photos.push(e.target.value);
    this.setState({
      photos,
    });
  };

  submitAnswer = () => {
    const { question_id } = this.props;
    console.log(this.state);
    axiosConfig.post(`/qa/questions/${question_id}/answers`, this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { hideModal } = this.props;
    return (
      <div className={AModalCSS.modalBackground}>
        <div className={AModalCSS.modalContainer}>
          <div className={AModalCSS.exitButton}>
            <button type="submit" className={AModalCSS.exitBtn} onClick={hideModal}>X</button>
          </div>
          <h2 className={AModalCSS.title}>Submit Your Answer</h2>
          <h4 className={AModalCSS.subtitle}>
            product name: question body
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
