import React from 'react';
import AnswerItem from './AnswerItem';
import AListCSS from './AnswerList.module.css';

class AnswerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={AListCSS.answerlist}>
        This is Answer List, it will generate an Answer Item for each Answer.
        <AnswerItem />
      </div>
    );
  }
}

export default AnswerList;
