import React from 'react';
import QACSS from './QA.module.css';
import QuestionList from './Questions/QuestionList.jsx';

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className={QACSS.qa_section}>
          <div className={QACSS.qa_body}>
            <QuestionList />
          </div>
        </div>
      </div>
    );
  }
}

export default QA;
