import React from 'react';
import QModalCSS from './QuestionModal.module.css';
import axiosConfig from '../../../../../axiosConfig.js';

class QuestionModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    // this.handlePhotos = this.handlePhotos.bind(this);
    this.submitQuestion = this.submitQuestion.bind(this);
    const { productId } = this.props;
    this.state = {
      product_id: productId,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // handlePhotos = (e) => {
  //   const { photos } = this.state;
  //   photos.push(e.target.value);
  //   this.setState({
  //     photos,
  //   });
  // };

  submitQuestion = () => {
    const { toggleQModal, getQuestions } = this.props;
    axiosConfig.post('/qa/questions', this.state)
      .then(() => {
        toggleQModal(false);
        getQuestions();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { toggleQModal, productName } = this.props;
    return (
      <div className={QModalCSS.modalBackground}>
        <div className={QModalCSS.modalContainer}>
          <button type="submit" className={QModalCSS.exitBtn} onClick={() => { toggleQModal(false); }}> X </button>
          <h2>Ask Your Question</h2>
          <h4>
            {`About the ${productName}`}
          </h4>
          <div className={QModalCSS.body}>
            <div>
              Your Question:
              <textarea placeholder="Ask away..." maxLength="1000" rows="4" cols="60" name="body" onChange={(e) => { this.handleChange(e); }} />
            </div>
            <div>
              What is your nickname:
              <input type="type" placeholder="Example: jackson11!" name="name" onChange={(e) => { this.handleChange(e); }} />
              <div className={QModalCSS.security}>
                For privacy reasons, do not use your full name or email address
              </div>
            </div>
            <div>
              Your email:
              <input type="email" placeholder="Example: jackson@email.com" name="email" onChange={(e) => { this.handleChange(e); }} />
              <div className={QModalCSS.security}>
                For authentication reasons, you will not be emailed
              </div>
            </div>
            <div className={QModalCSS.footer}>
              <button type="submit" className={QModalCSS.submitBtn} onClick={this.submitQuestion}>Submit question</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionModal;
