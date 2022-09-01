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
          <button type="submit" className={QModalCSS.exitBtn} onClick={() => { toggleQModal(false); }}> X </button>
          <h2>Ask Your Question</h2>
          <h4>
            About the product name
          </h4>
          <div className={QModalCSS.body}>
            <div>
              Your Question:
              <textarea placeholder="Ask away..." maxLength="1000" rows="4" cols="60" />
            </div>
            <div>
              What is your nickname:
              <input type="type" placeholder="Example: jackson11!" />
              <div className={QModalCSS.security}>
                For privacy reasons, do not use your full name or email address
              </div>
            </div>
            <div>
              Your email:
              <input type="email" placeholder="Example: jackson@email.com" />
              <div className={QModalCSS.security}>
                For authentication reasons, you will not be emailed
              </div>
            </div>
            <div className={QModalCSS.footer}>
              <button type="submit" className={QModalCSS.submitBtn}>Submit question</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionModal;
