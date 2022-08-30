import React from 'react';
import axiosConfig from '../../../../axiosConfig.js'; // use this variable in place of axios
import ProductOverview from '../ProductOverview/ProductOverview.jsx';
import Comparison from '../Comparison/Comparison.jsx';
import QA from '../QA/QA.jsx';
import RatingsReviews from '../RatingsReviews/RatingsReviews.jsx';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 65632,
    };
  }

  render() {
    const { productId } = this.state;
    return (
      <div>
        <p>
          Current Product Id:
          {productId}
        </p>
        <ProductOverview />
        <QA productId={productId} />
        <Comparison />
        <RatingsReviews axiosConfig={axiosConfig} productId={productId} />
      </div>
    );
  }
}

export default App;
