import React from 'react';
import withTracker from './TrackHOC.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import YourProducts from './YourProducts/YourProducts.jsx';
import Modal from './Modal/Modal.jsx';
import comparison from './Comparison.module.css';

// eslint-disable-next-line react/prefer-stateless-function
class Comparison extends React.Component {
  render() {
    const { productId, updateProductId, sendInteraction } = this.props;
    return (
      // eslint-disable-next-line max-len
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      <div className={comparison.container} onClick={(e) => sendInteraction('Related Items and Comparison', e)}>
        <RelatedProducts productId={productId} updateProductId={updateProductId} />
        <YourProducts productId={productId} updateProductId={updateProductId} />
        <Modal key={productId} productId={productId} />
      </div>
    );
  }
}

export default withTracker(Comparison);
