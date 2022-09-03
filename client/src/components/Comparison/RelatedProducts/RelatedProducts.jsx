import React from 'react';
import PubSub from 'pubsub-js';
// eslint-disable-next-line import/extensions
import Card from '../Card/Card.jsx';
import relatedProducts from './RelatedProducts.module.css';
import ProductList from '../ProductList/ProductList.jsx';
import instance from '../../../../../axiosConfig.js';

// eslint-disable-next-line react/prefer-stateless-function
class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProductIds: [],
    };
  }

  componentDidMount() {
    const { productId } = this.props;
    this.token = PubSub.subscribe('newProductId', (msg, data) => {
      this.updateRelatedProducts(data.id);
    });

    this.updateRelatedProducts(productId);
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }

  // if the right edge of the carousel is inside the container
  // set this.state.isRightEdgeInBound to false
  updateRelatedProducts = async (productId) => {
    try {
      const response = await instance.get(`/products/${productId}/related`);
      let { data } = response;
      data = [...new Set(data)];

      await new Promise((res) => {
        this.setState({
          relatedProductIds: data,
        }, res);
      });
    } catch (e) {
      console.warn(e);
    }
  };

  render() {
    const { relatedProductIds } = this.state;
    const { updateProductId, productId } = this.props;
    return (
      <div className={relatedProducts['related-products']}>
        <span>
          Current Product Id:
          {productId}
        </span>
        <ProductList productsIdToDisplay={relatedProductIds} updateProductId={updateProductId} listType="RelatedProducts" />
      </div>
    );
  }
}

export default RelatedProducts;
