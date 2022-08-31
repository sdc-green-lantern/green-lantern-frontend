import { useState } from 'react';
import React from 'react';
import QListCSS from './QuestionList.module.css';
import QuestionItem from './QuestionItem.jsx';
import QuestionModal from './QuestionModal.jsx';

function QuestionList(props) {
  const [openQModal, toggleQModal] = useState(false);
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
      <button type="submit" className={QListCSS.addQButton} onClick={() => { toggleQModal(true); }}>Ask a Question +</button>
      {openQModal && <QuestionModal toggleQModal={toggleQModal} />}
    </div>

  );
}

export default QuestionList;
