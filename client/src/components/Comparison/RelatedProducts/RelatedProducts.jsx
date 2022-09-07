import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import relatedProducts from './RelatedProducts.module.css';
import ProductList from '../ProductList/ProductList.jsx';
import instance from '../../../../../axiosConfig.js';

// eslint-disable-next-line react/prefer-stateless-function
class RelatedProducts extends React.Component {
  state = {
    relatedProductIds: [],
    isLoading: false,
    hasError: false,
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
      // make productlist remount each time
      this.setState({ isLoading: true });
      const response = await instance.get(`/products/${productId}/related`);
      let { data } = response;
      data = [...new Set(data)];

      this.setState({
        relatedProductIds: data,
        isLoading: false,
      });
    } catch (err) {
      this.setState({
        hasError: true,
        isLoading: false,
      });
      console.log(err.response.data);
    }
  };

  render() {
    const { relatedProductIds, isLoading, hasError } = this.state;
    const { updateProductId, productId } = this.props;
    return (
      <div className={relatedProducts['related-products']}>
        {/* <span>
          Current Product Id:
          {productId}
        </span> */}
        {
          isLoading
            ? <FontAwesomeIcon icon={faSpinner} beat spin className={relatedProducts.loading} />
            : hasError ? <h3 className={relatedProducts.error}>......Unstable Internet Connection. Please try again later</h3>
              : <ProductList productsIdToDisplay={relatedProductIds} updateProductId={updateProductId} productId={productId} listType="RelatedProducts" />
        }
      </div>
    );
  }
}

export default RelatedProducts;
