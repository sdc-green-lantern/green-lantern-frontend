import React from 'react';
import AnswerItem from './AnswerItem.jsx';
import AListCSS from './AnswerList.module.css';

class AnswerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { answers } = this.props;
    return (
      <div className={AListCSS.answerlist}>
        {answers.map((answer, index) => <AnswerItem answer={answer} key={index} />)}
      </div>
    );
  }
}

export default AnswerList;
