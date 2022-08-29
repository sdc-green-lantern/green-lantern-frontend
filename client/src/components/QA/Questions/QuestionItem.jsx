import React from 'react';
import QItemCSS from './QuestionItem.module.css';
import AnswerList from './Answers/AnswerList.jsx';
import axiosConfig from '../../../../../axiosConfig.js';

class QuestionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  componentDidMount() {
    const { question } = this.props;
    const { question_id } = question;
    axiosConfig.get(`qa/questions/${question_id}/answers`)
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
      answerDisplay = <AnswerList answers={results} />;
    } else {
      answerDisplay = <button type="submit"> Answer this question </button>;
    }
    return (
      <div className={QItemCSS.questionEach}>
        <h4>
          Q:
          { question_body }
        </h4>
        { answerDisplay }
      </div>
    );
  }
}

export default QuestionItem;
