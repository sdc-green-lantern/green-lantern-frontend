import React from 'react';
import PubSub from 'pubsub-js';
import ProductList from '../ProductList/ProductList.jsx';
import yourProducts from './YourProducts.module.css';

class YourProducts extends React.Component {
  state = {
    yourProductIds: [],
  };

  componentDidMount() {
    this.token = PubSub.subscribe('newYourProduct', (msg, id) => {
      this.updateYourProducts(id);
    });
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }

  updateYourProducts = (id) => {
    const { yourProductIds: prevProductIds } = this.state;
    if (prevProductIds.includes(id)) {
      return;
    }
    const newProductIds = [...prevProductIds, id];
    this.setState({
      yourProductIds: newProductIds,
    });
  };

  render() {
    const { yourProductIds } = this.state;
    const { productId, updateProductId } = this.props;
    return (
      <div className={yourProducts['your-products']}>
        <span>
          Current Product Id:
          {productId}
        </span>
        <ProductList productsIdToDisplay={yourProductIds} listType="YourProducts" productId={productId} updateProductId={updateProductId} />
      </div>
    );
  }
}

export default YourProducts;
