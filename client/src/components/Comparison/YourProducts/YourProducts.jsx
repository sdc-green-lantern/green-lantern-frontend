import React from 'react';
import PubSub from 'pubsub-js';
import ProductList from '../ProductList/ProductList.jsx';
import yourProducts from './YourProducts.module.css';

class YourProducts extends React.Component {
  state = {
    yourProductIds: [],
    isAdding: false,
  };

  // subscribe the newYourProduct updates when mounted
  // when updated
  componentDidMount() {
    this.token1 = PubSub.subscribe('newYourProduct', (msg, id) => {
      this.addYourProduct(id);
    });
    this.token2 = PubSub.subscribe('yourProductToRemove', (msg, id) => {
      this.removeYourProduct(id);
    });
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token1);
    PubSub.unsubscribe(this.token2);
  }

  removeYourProduct = (idToRemove) => {
    const { yourProductIds: prevProductIds } = this.state;
    const newProductIds = prevProductIds.filter((id) => id !== idToRemove);
    this.setState({
      yourProductIds: newProductIds,
      isAdding: false
    });
  };

  addYourProduct = (id) => {
    const { yourProductIds: prevProductIds } = this.state;
    if (prevProductIds.includes(id)) {
      alert('The product has already been selected');
      return;
    }
    const newProductIds = [...prevProductIds, id];
    this.setState({
      yourProductIds: newProductIds,
      isAdding: true,
    });
  };

  render() {
    const { yourProductIds, isAdding } = this.state;
    const { productId, updateProductId } = this.props;
    return (
      <div className={yourProducts['your-products']}>
        {/* <span>
          Current Product Id:
          {productId}
        </span> */}
        <ProductList productsIdToDisplay={yourProductIds} listType="YourProducts" productId={productId} updateProductId={updateProductId} isAdding={isAdding} />
      </div>
    );
  }
}

export default YourProducts;
