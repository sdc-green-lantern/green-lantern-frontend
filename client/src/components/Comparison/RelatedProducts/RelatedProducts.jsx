import React from 'react';
import relatedProducts from './RelatedProducts.module.css';
import ProductList from '../ProductList/ProductList.jsx';
import instance from '../../../../../axiosConfig.js';

// eslint-disable-next-line react/prefer-stateless-function
class RelatedProducts extends React.Component {
  state = {
    relatedProductIds: [],
  };

  // get the related products id when initially mounted
  componentDidMount() {
    const { productId } = this.props;
    this.updateRelatedProducts(productId);
  }

  // when updated,
  // if the productId changed, re-get the related products id
  componentDidUpdate(prevProps) {
    const { productId: prevId } = prevProps;
    const { productId: currId } = this.props;

    if (prevId !== currId) {
      this.updateRelatedProducts(currId);
    }
  }

  // get the related products id and update state
  updateRelatedProducts = async (productId) => {
    try {
      const response = await instance.get(`/products/${productId}/related`);
      let { data } = response;
      data = [...new Set(data)];

      this.setState({
        relatedProductIds: data,
      });
    } catch (err) {
      console.log(err);
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
        <ProductList productsIdToDisplay={relatedProductIds} updateProductId={updateProductId} productId={productId} listType="RelatedProducts" />
      </div>
    );
  }
}

export default RelatedProducts;
