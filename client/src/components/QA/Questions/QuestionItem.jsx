import React from 'react';
import QItemCSS from './QuestionItem.module.css';
import AnswerList from './Answers/AnswerList.jsx';
import axiosConfig from '../../../../../axiosConfig.js';
import AnswerModal from './AnswerModal.jsx';

class QuestionItem extends React.Component {
  constructor(props) {
    super(props);
    this.getAnswers = this.getAnswers.bind(this);
    this.getMoreAnswers = this.getMoreAnswers.bind(this);
    this.addQYes = this.addQYes.bind(this);
    this.state = {
      results: [],
      count: 2,
      yesCount: 0,
      showAModal: false,
    };
  }

  componentDidMount() {
    this.getAnswers();
  }

  getAnswers = (pages = 1) => {
    const { question } = this.props;
    const { question_id } = question;
    const { count } = this.state;
    axiosConfig.get(`qa/questions/${question_id}/answers?page=${pages}&count=${count}`)
      .then((response) => {
        this.setState({
          count: count + 2,
          results: response.data.results,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getMoreAnswers = () => {
    this.getAnswers();
  };

  addQYes = () => {
    const { question } = this.props;
    const { question_id } = question;
    const { yesCount } = this.state;
    if (yesCount < 1) {
      axiosConfig.put(`/qa/questions/${question_id}/helpful`)
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
    let answerDisplay;
    const { showAModal } = this.state;
    const { yesCount } = this.state;
    const { question } = this.props;
    const { question_body } = question;
    const { results } = this.state;
    const { question_helpfulness } = question;
    if (results.length !== 0) {
      answerDisplay = <AnswerList answers={results} getMoreAnswers={this.getMoreAnswers} />;
    } else {
      answerDisplay = <button type="submit" className={QItemCSS.answerQBtn} onClick={() => {}}> Answer this question </button>;
    }
    return (
      <div className={QItemCSS.questionEach}>
        <span>
          <span style={{ fontWeight: 'bold' }}>
            Q:
            { question_body }
          </span>
          <span className={QItemCSS.helpful}>
            Helpful?
            <button
              type="submit"
              className={QItemCSS.yesHelpful}
              onClick={() => { this.addQYes(); }}
            >
              Yes
            </button>
          </span>
          <span>
            {`(${question_helpfulness + yesCount})`}
          </span>
          |
          <span>
            <button className={QItemCSS.addAnswerBtn} type="submit" onClick={() => { this.setState({ showAModal: true }); }}>Add Answer</button>
          </span>
          <div>
            { showAModal && (
            <AnswerModal hideModal={() => { this.setState({ showAModal: false }); }} />
            )}
          </div>
        </span>
        { answerDisplay }
      </div>
    );
  }
}

export default QuestionItem;
