import React from 'react';
import QListCSS from './QuestionList.module.css';
import QuestionItem from './QuestionItem';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={QListCSS.questionlist}>
        This is QuestionList. This will map out each question item.
        <QuestionItem />
      </div>
    );
  }
}

export default QuestionList;
