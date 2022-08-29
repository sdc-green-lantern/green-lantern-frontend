import React from 'react';
import QItemCSS from './QuestionItem.module.css';
import AnswerList from './Answers/AnswerList.jsx';

class QuestionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={QItemCSS.questionEach}>
        <h4>
          Q:
          {this.props.question.question_body}
        </h4>
        <AnswerList />
      </div>
    );
  }
}

export default QuestionItem;
