import React from 'react';
// eslint-disable-next-line import/extensions
import Card from '../Card/Card.jsx';
import productList from './ProductList.module.css';

// eslint-disable-next-line react/prefer-stateless-function
class ProductList extends React.Component {
  state = {
    isRightScrollerShown: false,
    leftOffset: 0,
  };

  // proudctlist of related product will remount each time the productId changes
  componentDidMount() {
    window.addEventListener('resize', this.resizeHandler);
    this.setRightScrollerDisplay();
    this.setState({ leftOffset: 0 });
  }

  componentDidUpdate(prevProps) {
    const { productsIdToDisplay: prevProducts } = prevProps;
    const { productsIdToDisplay: currProducts } = this.props;
    const { listType } = this.props;
    // add a new product to your product list
    if (listType === 'YourProducts' && prevProducts !== currProducts) {
      this.setRightScrollerDisplay();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeHandler);
  }

  resizeHandler = () => {
    this.setRightScrollerDisplay();
  };

  scroll = (distance) => {
    if (this.timer) {
      return;
    }

    // eslint-disable-next-line react/destructuring-assignment
    const end = this.state.leftOffset + distance;
    const speed = distance < 0 ? -8 : 8;
    const unitDuration = 20;
    this.timer = setInterval(() => {
      const { leftOffset } = this.state;
      let newLeftOffset = leftOffset + speed;
      if ((newLeftOffset >= end && speed > 0) || (newLeftOffset <= end && speed < 0)) {
        newLeftOffset = end;
        clearInterval(this.timer);
        this.timer = null;
      }

      this.setState({ leftOffset: newLeftOffset }, this.setRightScrollerDisplay);
    }, unitDuration);
  };

  // scroll button click handler
  handleScroll = (isRight) => () => {
    const unitOffset = isRight ? -250 : 250;
    this.scroll(unitOffset);
  };

  // if the right edge of the carousel is inside the container
  // set this.state.isRightEdgeInBound to false
  shouldRightScrollerDisplay = () => {
    const { clientWidth: conainerWidth } = this.main || {};
    const { clientWidth: wrapperWidth } = this.carouselWrapper;
    const { leftOffset } = this.state;

    const result = (wrapperWidth + leftOffset > conainerWidth);
    return result;
  };

  setRightScrollerDisplay = () => {
    const result = this.shouldRightScrollerDisplay();
    const { isRightScrollerShown } = this.state;
    if (isRightScrollerShown !== result) {
      this.setState({
        isRightScrollerShown: result,
      });
    }
  };

  render() {
    const { leftOffset, isRightScrollerShown } = this.state;
    const {
      productsIdToDisplay, updateProductId, listType, productId, isAdding
    } = this.props;
    const relatedProductExist = productsIdToDisplay.length !== 0;
    return (
      <div className={productList.products}>
        <h2 className={productList.title} data-testid="title">
          {listType}
        </h2>
        <div className={productList.main} ref={(ele) => { this.main = ele; }}>
          <div
            className={productList['scroll-left']}
            style={{ display: leftOffset === 0 ? 'none' : 'flex' }}
          >
            <div
              className={productList['arrow-left']}
            />
            <button type="button" onClick={this.handleScroll(false)} />
          </div>
          <div
            className={productList['scroll-right']}
            style={{ display: !isRightScrollerShown ? 'none' : 'flex' }}
          >
            <div
              className={productList['arrow-right']}
            />
            <button type="button" onClick={this.handleScroll(true)} />
          </div>
          <div className={productList.carousel}>
            {!relatedProductExist && listType === 'RelatedProducts' ? <div className={productList.backup}>No Related Product</div> : null}
            <div
              className={
                `${productList['carousel-wrapper']}
                ${productList[isAdding ? 'is-adding' : '']}`
                }
              ref={(ele) => { this.carouselWrapper = ele; }}
              style={{ left: leftOffset }}
            >
              {listType === 'YourProducts' ? <Card cardType="add" id={productId} /> : null}
              {productsIdToDisplay
                .map(
                  // eslint-disable-next-line max-len
                  (id) => <Card key={id} id={id} updateProductId={updateProductId} cardType={listType} />,
                )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
