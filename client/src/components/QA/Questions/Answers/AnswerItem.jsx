import React from 'react';
import AItemCSS from './AnswerItem.module.css';

class AnswerItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={AItemCSS.answeritem}>
        A: {this.props.answer.body}
      </div>
    );
  }
}

export default AnswerItem;
