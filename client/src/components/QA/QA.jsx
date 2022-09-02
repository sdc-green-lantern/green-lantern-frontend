import React from 'react';
import QACSS from './QA.module.css';
import QuestionList from './Questions/QuestionList.jsx';
import axiosConfig from '../../../../axiosConfig.js';
import SearchQA from './SearchQA/SearchQA.jsx';

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.getQuestions = this.getQuestions.bind(this);
    this.getMoreQuestions = this.getMoreQuestions.bind(this);
    this.state = {
      count: 2,
      results: [],
      display: [],
    };
  }

  componentDidMount() {
    this.getQuestions();
  }

  getQuestions = () => {
    const { productId } = this.props;
    axiosConfig.get(`/qa/questions?product_id=${productId}&page=1&count=1000`)
      .then((response) => {
        const { count } = this.state;
        this.setState({
          results: response.data.results,
          display: response.data.results.slice(0, count),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getMoreQuestions = () => {
    let { count } = this.state;
    const { results } = this.state;
    count += 2;
    this.setState({
      display: results.slice(0, count),
      count,
    });
  };

  render() {
    let displayList;
    const { display, results } = this.state;
    const { productId } = this.props;
    if (display.length !== 0) {
      displayList = (
        <QuestionList
          questions={display}
          compare={results}
          productId={productId}
          getQuestions={this.getQuestions}
          getMoreQuestions={this.getMoreQuestions}
        />
      );
    } else {
      displayList = <div className={QACSS.container}><button className={QACSS.askButton} type="submit">Ask a Question</button></div>;
    }
    return (
      <div>
        <div className={QACSS.qa_section}>
          <div className={QACSS.qa_body}>
            <h2 data-testid="QA-1">Questions and Answers</h2>
            <SearchQA />
            { displayList }
          </div>
        </div>
      </div>
    );
  }
}

export default QA;
