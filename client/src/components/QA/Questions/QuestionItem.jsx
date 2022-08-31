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
    this.state = {
      results: [],
      count: 2,
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

  render() {
    let answerDisplay;
    const { showAModal } = this.state;
    const { question } = this.props;
    const { question_body } = question;
    const { results } = this.state;
    if (results.length !== 0) {
      answerDisplay = <AnswerList answers={results} getMoreAnswers={this.getMoreAnswers} />;
    } else {
      answerDisplay = <button type="submit" onClick={() => {}}> Answer this question </button>;
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
              onClick={() => { console.log('clicked'); }}
            >
              Yes
            </button>
          </span>
          <span>
            {`(${question.question_helpfulness})`}
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
