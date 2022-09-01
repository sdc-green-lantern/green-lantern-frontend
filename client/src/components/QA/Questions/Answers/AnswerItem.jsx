import React from 'react';
import AItemCSS from './AnswerItem.module.css';
import axiosConfig from '../../../../../../axiosConfig.js';

class AnswerItem extends React.Component {
  constructor(props) {
    super(props);
    this.addAYes = this.addAYes.bind(this);
    this.state = {
      yesCount: 0,
    };
  }

  addAYes = () => {
    const { answer } = this.props;
    const { answer_id } = answer;
    const { yesCount } = this.state;
    if (yesCount < 1) {
      axiosConfig.put(`/qa/answers/${answer_id}/helpful`)
        .then((response) => {
          this.setState({
            yesCount: yesCount + 1,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  render() {
    const { answer } = this.props;
    const { answerer_name } = answer;
    const { yesCount } = this.state;
    const { helpfulness } = answer;
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
            <button type="submit" className={AItemCSS.yesHelpful} onClick={() => { this.addAYes(); }}>Yes</button>
            {`(${helpfulness + yesCount})   |`}
          </span>
          <span className={AItemCSS.reportBtn}>Report</span>
        </span>

      </div>
    );
  }
}

export default AnswerItem;
