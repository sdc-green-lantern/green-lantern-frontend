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
      <div className={QItemCSS.answerlist}>
        This is a Question item. It will utilize an Answer List.
        <AnswerList />
      </div>
    );
  }
}

export default QuestionItem;
