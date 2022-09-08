import React, { useState } from 'react';
import QListCSS from './QuestionList.module.css';
import QuestionItem from './QuestionItem.jsx';
import QuestionModal from './QuestionModal.jsx';

function QuestionList(props) {
  const [openQModal, toggleQModal] = useState(false);
  const {
    compare, questions, getMoreQuestions, productId, productName, getQuestions,
  } = props;

  let showBtn = true;

  if (questions.length === compare.length) {
    showBtn = false;
  }

  return (
    <div className={QListCSS.questionContainer}>
      <div className={QListCSS.questionlist}>
        {questions.map((question) => (
          <QuestionItem
            question={question}
            productName={productName}
            key={question.question_id}
          />
        ))}
      </div>
      {showBtn && <button type="submit" className={QListCSS.moreButton} onClick={getMoreQuestions}>More Answered Questions</button>}
      <button type="submit" className={QListCSS.addQButton} onClick={() => { toggleQModal(true); }}>Ask a Question +</button>
      {openQModal && (
      <QuestionModal
        toggleQModal={toggleQModal}
        productId={productId}
        productName={productName}
        getQuestions={getQuestions}
      />
      )}
    </div>

  );
}

export default QuestionList;
