import React from 'react';
import QItemCSS from './QuestionItem.module.css';
import AnswerList from './Answers/AnswerList.jsx';
import axiosConfig from '../../../../../axiosConfig.js';

class QuestionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      count: 2,
    };
  }

  componentDidMount() {
    const { question } = this.props;
    const { question_id } = question;
    const { count } = this.state;
    axiosConfig.get(`qa/questions/${question_id}/answers?page=1&count=${count}`)
      .then((response) => {
        this.setState({
          results: response.data.results,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let answerDisplay;
    const { question } = this.props;
    const { question_body } = question;
    const { results } = this.state;
    if (results.length !== 0) {
      answerDisplay = (
        <div>
          <AnswerList answers={results} />
          <button type="submit">Show more Answers</button>
        </div>
      );
    } else {
      answerDisplay = <button type="submit"> Answer this question </button>;
    }
    return (
      <div className={QItemCSS.questionEach}>
        <span>
          <span style={{ fontWeight: 'bold' }}>
            Q:
            { question_body }
          </span>
          <span>
            Helpful?
            <span>
              Yes
            </span>
          </span>
          <span>
            {`(${question.question_helpfulness})`}
          </span>
        </span>
        { answerDisplay }
      </div>
    );
  }
}

export default QuestionItem;
