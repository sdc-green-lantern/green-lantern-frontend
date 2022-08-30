import React from 'react';
import QListCSS from './QuestionList.module.css';
import QuestionItem from './QuestionItem.jsx';

function QuestionList(props) {
  const { questions } = props;
  return (
    <div className={QListCSS.questionlist}>
      {questions.map((question) => (
        <QuestionItem
          question={question}
          key={question.question_id}
        />
      ))}
    </div>
  );
}

export default QuestionList;
