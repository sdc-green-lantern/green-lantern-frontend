import React from 'react';
import AnswerItem from './AnswerItem.jsx';
import AListCSS from './AnswerList.module.css';

class AnswerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { getMoreAnswers } = this.props;
    const { answers } = this.props;
    return (
      <div>
        <div className={AListCSS.answerlist}>
          {answers.map((answer) => (
            <AnswerItem
              answer={answer}
              key={answer.answer_id}
            />
          ))}
        </div>
        <button type="submit" className={AListCSS.showAnswers} onClick={getMoreAnswers}>Show more Answers</button>
      </div>
    );
  }
}

export default AnswerList;
