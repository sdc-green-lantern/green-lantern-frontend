import React from 'react';
import QItemCSS from './QuestionItem.module.css';
import AnswerList from './Answers/AnswerList.jsx';

class QuestionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [
        {
          answer_id: 8,
          body: "What a great question!",
          date: "2018-01-04T00:00:00.000Z",
          answerer_name: "metslover",
          helpfulness: 8,
          photos: [],
        },
        {
          answer_id: 5,
          body: "Something pretty durable but I can't be sure",
          date: "2018-01-04T00:00:00.000Z",
          answerer_name: "metslover",
          helpfulness: 5,
          photos: [{
            id: 1,
            url: "urlplaceholder/answer_5_photo_number_1.jpg",
          },
          {
            id: 2,
            url: "urlplaceholder/answer_5_photo_number_2.jpg",
          },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div className={QItemCSS.questionEach}>
        {this.props.question.question_body}
        <AnswerList />
      </div>
    );
  }
}

export default QuestionItem;
