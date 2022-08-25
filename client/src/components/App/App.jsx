import React from 'react';
import Comparison from '../Comparison/Comparison.jsx';
import QA from '../QA/QA.jsx';
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <QA />
        <Comparison />
      </div>
    )
  }
};

export default App;