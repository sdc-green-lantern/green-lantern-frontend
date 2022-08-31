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
            <button type="submit" onClick={hideModal}>X</button>
          </div>
          <h2>Submit Your Answer</h2>
          <h4>
            product name: question body
          </h4>
          <div>
            <label>
              Your Answer:
              <input type="textarea" placeholder="Answer away..." />
            </label>
            <label>
              What is your nickname:
              <input type="type" placeholder="Example: jack543!" />
              <span>For privacy reasons, do not use your full name or email address</span>
            </label>
            <label>
              Your email:
              <input type="email" placeholder="Example: jack@email.com" />
              <span>For authentication reasons, you will not be emailed</span>
            </label>
            <label>
              Upload you photos:
              <input type="file" />
            </label>
            <button type="submit">Submit answer</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AnswerModal;