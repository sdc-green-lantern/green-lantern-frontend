import React from 'react';
import QACSS from './QA.module.css';
import QuestionList from './Questions/QuestionList.jsx';
import axiosConfig from '../../../../axiosConfig.js';

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  componentDidMount() {
    const { productId } = this.props;
    axiosConfig.get(`/qa/questions?product_id=${productId}`)
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
    let display;
    const { results } = this.state;
    const { productId } = this.props;
    if (results.length !== 0) {
      display = <QuestionList questions={results} productId={productId} />;
    } else {
      display = <button className="QACSS.askButton" type="submit">Ask a Question</button>;
    }
    return (
      <div>
        <div className={QACSS.qa_section}>
          <div className={QACSS.qa_body}>
            <h2>Questions and Answers</h2>
            { display }
          </div>
        </div>
      </div>
    );
  }
}

export default QA;
