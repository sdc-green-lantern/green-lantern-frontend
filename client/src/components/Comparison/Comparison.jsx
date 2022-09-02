import React from 'react';
// eslint-disable-next-line import/extensions
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
// eslint-disable-next-line import/extensions
import YourProducts from './YourProducts/YourProducts.jsx';
import Modal from './Modal/Modal.jsx';
import comparison from './Comparison.module.css';

// eslint-disable-next-line react/prefer-stateless-function
class Comparison extends React.Component {
  render() {
    const { productId, updateProductId } = this.props;
    return (
      <div className={comparison.container}>
        <RelatedProducts productId={productId} updateProductId={updateProductId} />
        <YourProducts />
        <Modal productId={productId} />
      </div>
    );
  }
}

export default Comparison;
