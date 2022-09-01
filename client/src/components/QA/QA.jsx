import React from 'react';
import QACSS from './QA.module.css';
import QuestionList from './Questions/QuestionList.jsx';
import axiosConfig from '../../../../axiosConfig.js';

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.getQuestions = this.getQuestions.bind(this);
    this.getMoreQuestions = this.getMoreQuestions.bind(this);
    this.state = {
      count: 3,
      results: [],
      showMoreBtn: true,
    };
  }

  componentDidMount() {
    this.getQuestions();
  }

  getQuestions = (pages = 1) => {
    const { productId } = this.props;
    const { count } = this.state;
    const { results } = this.state;
    axiosConfig.get(`/qa/questions?product_id=${productId}&page=${pages}&count=${count}`)
      .then((response) => {
        if (results.length === response.data.results.length) {
          this.setState({
            count: count + 2,
            results: response.data.results,
            showMoreBtn: false,
          });
        } else {
          this.setState({
            count: count + 2,
            results: response.data.results,
            showMoreBtn: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getMoreQuestions = () => {
    this.getQuestions();
  };

  render() {
    let display;
    const { results } = this.state;
    const { showMoreBtn } = this.state;
    const { productId } = this.props;
    if (results.length !== 0) {
      display = (
        <QuestionList
          questions={results}
          productId={productId}
          getMoreQuestions={this.getMoreQuestions}
          showMoreBtn={showMoreBtn}
        />
      );
    } else {
      display = <button className={QACSS.askButton} type="submit">Ask a Question</button>;
    }
    return (
      <div>
        <div className={QACSS.qa_section}>
          <div className={QACSS.qa_body}>
            <h2 data-testid="QA-1">Questions and Answers</h2>
            { display }
          </div>
        </div>
      </div>
    );
  }
}

export default QA;
