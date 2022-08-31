import React from 'react';
// eslint-disable-next-line import/extensions
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
// eslint-disable-next-line import/extensions
import YourProducts from './YourProducts/YourProducts.jsx';
import './Comparison.module.css';

// eslint-disable-next-line react/prefer-stateless-function
class Comparison extends React.Component {
  render() {
    const { productId } = this.props;
    return (
      <div className="related-items">
        <RelatedProducts productId={productId} />
        <YourProducts />
      </div>
    );
  }
}

export default Comparison;
