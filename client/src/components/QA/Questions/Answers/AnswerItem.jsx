import React from 'react';
import { format, parseISO } from 'date-fns';
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
        .then(() => {
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
      .then(() => {
        getAnswers();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { answer } = this.props;
    const date = format(parseISO(answer.date), 'MMMM dd, yyyy');
    const { answerer_name, helpfulness, photos } = answer;
    const { yesCount } = this.state;
    const displayPhotos = photos.map((photo) => (
      <img
        src={photo.url}
        alt=""
        className={AItemCSS.thumbnail_img}
        key={photo.id}
      />
    ));

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
        <div className={AItemCSS.imgContainer}>
          {displayPhotos}
        </div>
        <span>
          <span className={AItemCSS.answerInfo}> by </span>
          <span style={condition}>
            {answer.answerer_name}
          </span>
          <span>
            {`, ${date}   |`}
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
