import React from 'react';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx'
import YourProducts from './YourProducts/YourProducts.jsx'



import comparison from './Comparison.module.css';

class Comparison extends React.Component {
  render() {
    return (
      <div className="related-items">
        <RelatedProducts />
        <YourProducts />
      </div>
    )
  }
}

export default Comparison;