import React from 'react';

class SearchQA extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      term: '',
    };
  }

  handleChange = (e) => {
    const { searchQuestions } = this.props;
    this.setState({
      term: e.target.value,
    }, () => {
      const { term } = this.state;
      searchQuestions(term);
    });
  };

  render() {
    return (
      <div>
        <div>
          Search Questions:
          <input type="Search" onChange={(e) => this.handleChange(e)} />
        </div>

      </div>
    );
  }
}

export default SearchQA;
