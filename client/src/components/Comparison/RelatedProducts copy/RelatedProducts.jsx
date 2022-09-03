import React from 'react';
import PubSub from 'pubsub-js';
// eslint-disable-next-line import/extensions
import Card from '../Card/Card.jsx';
import relatedProducts from './RelatedProducts.module.css';
import instance from '../../../../../axiosConfig.js';

// eslint-disable-next-line react/prefer-stateless-function
class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRightEdgeInBound: true,
      leftOffset: 0,
      relatedProductIds: [],
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.rightScrollerDisplay = this.rightScrollerDisplay.bind(this);
  }

  componentDidMount() {
    this.token = PubSub.subscribe('newProductId', (msg, data) => {
      this.updateRelatedProducts(data.id)
        .then(() => {
          this.rightScrollerDisplay();
        });
    });

    this.updateRelatedProducts(this.props.productId)
      .then(() => {
        this.rightScrollerDisplay();
      });
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }

  handleScroll(isRight) {
    return async () => {
      const unitOffset = isRight ? -192 : 192;
      const { leftOffset } = this.state;
      await new Promise((resolve) => {
        this.setState({
          leftOffset: leftOffset + unitOffset,
        }, resolve);
      });
      this.rightScrollerDisplay();
    };
  }

  // if the right edge of the carousel is inside the container
  // set this.state.isRightEdgeInBound to false
  rightScrollerDisplay() {
    const { clientWidth: conainerWidth } = this.main || {};
    const { clientWidth: wrapperWidth } = this.carouselWrapper;
    const { leftOffset } = this.state;
    if (wrapperWidth + leftOffset <= conainerWidth) {
      this.setState({
        isRightEdgeInBound: true,
      });
    } else {
      this.setState({
        isRightEdgeInBound: false,
      });
    }
  }

  async updateRelatedProducts(productId) {
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
  }

  render() {
    const { leftOffset, isRightEdgeInBound, relatedProductIds } = this.state;
    const { productId, updateProductId } = this.props;
    return (
      <div className={relatedProducts['related-products']}>
        <div className={relatedProducts.title} data-testid="title">
          RELATED PRODUCTS
        </div>
        <span>
          Current Product Id:
          {productId}
        </span>
        <div className={relatedProducts.main} ref={(ele) => { this.main = ele; }}>
          <div
            className={relatedProducts['scroll-left']}
            style={{ display: leftOffset === 0 ? 'none' : 'flex' }}
          >
            <div
              className={relatedProducts['arrow-left']}
            />
            <button type="button" onClick={this.handleScroll(false)} />
          </div>
          <div
            className={relatedProducts['scroll-right']}
            style={{ display: isRightEdgeInBound ? 'none' : 'flex' }}
          >
            <div
              className={relatedProducts['arrow-right']}
            />
            <button type="button" onClick={this.handleScroll(true)} />
          </div>
          <div className={relatedProducts.carousel}>
            <div
              className={relatedProducts['carousel-wrapper']}
              ref={(ele) => { this.carouselWrapper = ele; }}
              style={{ left: leftOffset }}
            >
              {relatedProductIds.map((id) =>
                <Card key={id} id={id} updateProductId={updateProductId} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RelatedProducts;
