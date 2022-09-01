import React from 'react';
import AnswerItem from './AnswerItem.jsx';
import AListCSS from './AnswerList.module.css';

class AnswerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { answers, compare, getMoreAnswers, getAnswers } = this.props;
    let showMoreBtn = true;
    if (answers.length === compare.length) {
      showMoreBtn = false;
    }
    return (
      <div>
        <div className={AListCSS.answerlist}>
          {answers.map((answer) => (
            <AnswerItem
              answer={answer}
              key={answer.answer_id}
              getAnswers={getAnswers}
            />
          ))}
        </div>
        {showMoreBtn && <button type="submit" className={AListCSS.showAnswers} onClick={getMoreAnswers}>Show more Answers</button>}
      </div>
    );
  }
}

export default AnswerList;
