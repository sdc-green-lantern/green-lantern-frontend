import React from 'react';
import Card from '../Card/Card.jsx';
import relatedProducts from './RelatedProducts.module.css';

class RelatedProducts extends React.Component {
  render() {
    return (
      <div className="related-products">
        <div>
          RELATED PRODUCTS
        </div>
        <div className={relatedProducts.main}>
          <div className={relatedProducts.container}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          </div>
        </div>
      </div>
    )
  }
}

export default RelatedProducts