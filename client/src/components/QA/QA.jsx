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
    this.getProductInfo = this.getProductInfo.bind(this);
    this.searchQuestions = this.searchQuestions.bind(this);
    this.state = {
      count: 2,
      results: [],
      display: [],
      productName: '',
    };
  }

  componentDidMount() {
    this.getQuestions();
    this.getProductInfo();
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

  getProductInfo = () => {
    const { productId } = this.props;
    axiosConfig.get(`/products/${productId}`)
      .then((results) => {
        this.setState({
          productName: results.data.name,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  searchQuestions = (string) => {
    const standard = string.toUpperCase();
    const { results } = this.state;
    const newDisplay = [];
    if (standard.length > 2) {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < results.length; i++) {
        const qBody = results[i].question_body.toUpperCase();
        if (qBody.includes(standard)) {
          newDisplay.push(results[i]);
        }
      }
      this.setState({
        display: newDisplay,
      });
    } else {
      this.getQuestions();
    }
  };

  render() {
    const { display, results, productName } = this.state;
    const { productId, sendInteraction } = this.props;

    return (
      // eslint-disable-next-line max-len
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      <div onClick={(e) => sendInteraction('Question and Answer', e)}>
        <div className={QACSS.qa_section}>
          <div className={QACSS.qa_body}>
            <h2 data-testid="QA-1">QUESTIONS AND ANSWERS</h2>
            <SearchQA searchQuestions={this.searchQuestions} />
            <QuestionList
              questions={display}
              compare={results}
              productName={productName}
              productId={productId}
              getQuestions={this.getQuestions}
              getMoreQuestions={this.getMoreQuestions}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default QA;
