import React from 'react';
import AItemCSS from './AnswerItem.module.css';
import axiosConfig from '../../../../../../axiosConfig.js';

class AnswerItem extends React.Component {
  constructor(props) {
    super(props);
    this.addAYes = this.addAYes.bind(this);
    this.sendReport = this.sendReport.bind(this);
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

  sendReport = () => {
    const { answer, getAnswers } = this.props;
    const { answer_id } = answer;
    axiosConfig.put(`/qa/answers/${answer_id}/report`)
      .then((response) => {
        getAnswers();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { answer } = this.props;
    const { answerer_name, helpfulness } = answer;
    const { yesCount } = this.state;

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
          <span className={AItemCSS.interactions}>
            <span>
              {'   Helpful?   '}
              <button type="submit" className={AItemCSS.yesHelpful} onClick={() => { this.addAYes(); }}>Yes</button>
              {`(${helpfulness + yesCount})   |`}
            </span>
            <button type="submit" className={AItemCSS.reportBtn} onClick={() => { this.sendReport(); }}>Report</button>
          </span>
        </span>
      </div>
    );
  }
}

export default AnswerItem;
