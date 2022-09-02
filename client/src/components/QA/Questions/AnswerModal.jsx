import React from 'react';
import AModalCSS from './AnswerModal.module.css';

class AnswerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
              <textarea placeholder="Answer away..." maxLength="1000" rows="4" cols="60" />
            </div>
            <div>
              <div>What is your nickname:</div>
              <input type="type" placeholder="Example: jack543!" />
              <div className={AModalCSS.security}>
                For privacy reasons, do not use your full name or email address
              </div>
            </div>
            <div>
              <div>Your email:</div>
              <input type="email" placeholder="Example: jack@email.com" />
              <div className={AModalCSS.security}>
                For authentication reasons, you will not be emailed
              </div>
            </div>
            <div>
              <div>Upload you photos:</div>
              <input type="file" />
            </div>
          </div>
          <div className={AModalCSS.footer}>
            <button type="submit" className={AModalCSS.submitBtn}>Submit answer</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AnswerModal;