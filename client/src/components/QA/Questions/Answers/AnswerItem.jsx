import React from 'react';
import AItemCSS from './AnswerItem.module.css';

class AnswerItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { answer } = this.props;
    return (
      <div className={AItemCSS.answerItem}>
        A:
        {answer.body}
      </div>
    );
  }
}

export default AnswerItem;
