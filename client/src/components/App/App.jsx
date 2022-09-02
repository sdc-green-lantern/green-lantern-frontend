import React from 'react';
import PubSub from 'pubsub-js';
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
  }

  componentDidMount() {
    this.token = PubSub.subscribe('showProduct', (msg, data) => {
      this.setState({
        productId: data.id,
      });
    });
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }

  render() {
    const { productId } = this.state;
    return (
      <div>
        <p>
          Current Product Id:
          {productId}
        </p>
        <ProductOverview productId={productId} />
        <QA productId={productId} />
        <Comparison productId={productId} />
        <RatingsReviews axiosConfig={axiosConfig} productId={productId} />
      </div>
    );
  }
}

export default App;
