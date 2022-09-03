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
      productId: 65635, // Pugs: 65633 // Shoes: 65635
    };
    this.updateProductId = this.updateProductId.bind(this);
  }

  updateProductId(id) {
    this.setState({
      productId: id,
    });
  }

  render() {
    const { productId } = this.state;
    return (
      <div>
        <select id="id-selector" onChange={(e) => {this.updateProductId(e.target.value)}}>
          <option value="65633">65633</option>
          <option value="65635">65635</option>
        </select>
        <p id="id-display">
          Current Product Id:
          {productId}
        </p>
        <ProductOverview productId={productId} />
        <QA productId={productId} />
        <Comparison productId={productId} updateProductId={this.updateProductId} key={`comp${productId}`} />
        <RatingsReviews axiosConfig={axiosConfig} productId={productId} />
      </div>
    );
  }
}

export default App;
