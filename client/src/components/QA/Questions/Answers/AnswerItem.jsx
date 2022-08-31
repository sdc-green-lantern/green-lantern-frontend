import React from 'react';
import AItemCSS from './AnswerItem.module.css';

class AnswerItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { answer } = this.props;
    const { answerer_name } = answer;
    const condition = {
      fontWeight: 'normal',
    };
    if (answerer_name === 'Seller') {
      condition.fontWeight = 'bold';
    }
    return (
      <div className={AItemCSS.answerItem}>
        <p className={AItemCSS.answerBody}>
          <span style={{ fontWeight: 'bold' }}>
            A:
          </span>
          {answer.body}
        </p>
        <span>
          <span className={AItemCSS.answerInfo}> by </span>
          <span style={condition}>
            {answer.answerer_name}
          </span>
          <span>
            {`, ${answer.date}   |`}
          </span>
          <span>
            {'   Helpful?   '}
            <span className={AItemCSS.yesHelpful}>Yes</span>
            {`(${answer.helpfulness})   |`}
          </span>
          <span className={AItemCSS.reportBtn}>Report</span>
        </span>

      </div>
    );
  }
}

export default AnswerItem;
