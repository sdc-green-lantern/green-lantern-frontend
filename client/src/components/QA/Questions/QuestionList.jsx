import React from 'react';
import QListCSS from './QuestionList.module.css';
import QuestionItem from './QuestionItem.jsx';

function QuestionList(props) {
  const { questions } = props;
  return (
    <div>
      <div className={QListCSS.questionlist}>
        {questions.map((question) => (
          <QuestionItem
            question={question}
            key={question.question_id}
          />
        ))}
      </div>
      <button type="submit" className={QListCSS.moreButton}>More Answered Questions</button>
      <button type="submit" className={QListCSS.addQButton}>Add a Question +</button>
    </div>

  );
}

export default QuestionList;
