import React from 'react';
import QListCSS from './QuestionList.module.css';
import QuestionItem from './QuestionItem.jsx';

function QuestionList(props) {
  return (
    <div className={QListCSS.questionlist}>
      {props.questions.map((question, index) => <QuestionItem question={question} key={index} />)}
    </div>
  );
}

export default QuestionList;
