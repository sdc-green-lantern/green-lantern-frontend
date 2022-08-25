import React from 'react';
import QListCSS from './QuestionList.module.css';
import QuestionItem from './QuestionItem.jsx';

class QuestionList extends React Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return(
      <div>
        This is QuestionList. This will map out each question item.
      </div>
    )
  }
}

export default QuestionList;