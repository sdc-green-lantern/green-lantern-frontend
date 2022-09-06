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

  componentDidMount() {
    window.addEventListener('resize', this.resizeHandler);
    this.setRightScrollerDisplay();
  }

  // When updated,
  // check the listtype and if the product id changed, reset the display list to the left
  // check if the right scroller should display
  componentDidUpdate(prevProps) {
    const { productId: prevId } = prevProps;
    const { productId: currId, listType } = this.props;

    if (prevId !== currId && listType === 'RelatedProducts') {
      this.setState({ leftOffset: 0 });
    }

    this.setRightScrollerDisplay();
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
    const duration = 800;
    const steps = 40;
    const unitDist = distance / steps;
    const unitDuration = duration / steps;
    this.timer = setInterval(() => {
      const { leftOffset } = this.state;
      this.setState({ leftOffset: leftOffset + unitDist });
    }, unitDuration);
    setTimeout(() => {
      clearInterval(this.timer);
      this.timer = null;
    }, duration);
  };

  // scroll button click handler
  handleScroll = (isRight) => () => {
    const unitOffset = isRight ? -190 : 190;
    this.scroll(unitOffset);
    /*
   const { leftOffset } = this.state;
    await new Promise((resolve) => {
      this.setState({
        leftOffset: leftOffset + unitOffset,
      }, resolve);
    });
    */
    // this.shouldRightScrollerDisplay();
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
      productsIdToDisplay, updateProductId, listType, productId,
    } = this.props;
    const relatedProductExist = productsIdToDisplay.length !== 0;
    return (
      <div className={productList.products}>
        <div className={productList.title} data-testid="title">
          {listType}
        </div>
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
              className={productList['carousel-wrapper']}
              ref={(ele) => { this.carouselWrapper = ele; }}
              style={{ left: leftOffset }}
            >
              {listType === 'YourProducts' ? <Card cardType="add" id={productId} /> : null}
              {productsIdToDisplay
                .map(
                  // eslint-disable-next-line max-len
                  (id) => <Card key={id} id={id} updateProductId={updateProductId} cardType={listType} />
                )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
