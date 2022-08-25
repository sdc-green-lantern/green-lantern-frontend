import React from 'react';
import ProductOverview from '../ProductOverview/ProductOverview.jsx';
import Comparison from '../Comparison/Comparison.jsx';
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <ProductOverview />
        <Comparison />
      </div>
    )
  }
};

export default App;