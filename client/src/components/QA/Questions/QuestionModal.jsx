import React from 'react';
import QModalCSS from './QuestionModal.module.css';

class QuestionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { toggleQModal } = this.props;
    return (
      <div className={QModalCSS.modalBackground}>
        <div className={QModalCSS.modalContainer}>
          <button type="submit" onClick={() => { toggleQModal(false); }}> X </button>
          <h2>Ask Your Question</h2>
          <h4>
            About the product name
          </h4>
          <div>
            <label>
              Your Question:
              <input type="textarea" placeholder="Ask away..." />
            </label>
            <label>
              What is your nickname:
              <input type="type" placeholder="Example: jackson11!" />
              <span>For privacy reasons, do not use your full name or email address</span>
            </label>
            <label>
              Your email:
              <input type="email" placeholder="Why did you like the product or not?" />
              <span>For authentication reasons, you will not be emailed</span>
            </label>
            <button type="submit">Submit question</button>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionModal;
