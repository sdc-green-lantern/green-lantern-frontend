import React from 'react';
// eslint-disable-next-line import/extensions
import Card from '../Card/Card.jsx';
import productList from './ProductList.module.css';

// eslint-disable-next-line react/prefer-stateless-function
class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRightScrollerShown: false,
      leftOffset: 0,
    };
  }

  componentDidMount() {
    console.log('mount again');
  }

  componentDidUpdate(prevProps, prevState) {
    const { isRightScrollerShown: prevRightScroller } = prevState;
    const result = this.shouldRightScrollerDisplay();
    if (prevRightScroller !== result) {
      this.setState({
        isRightScrollerShown: result,
      });
    }
  }

  handleScroll = (isRight) => async () => {
    const unitOffset = isRight ? -192 : 192;
    const { leftOffset } = this.state;
    await new Promise((resolve) => {
      this.setState({
        leftOffset: leftOffset + unitOffset,
      }, resolve);
    });
    this.shouldRightScrollerDisplay();
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

  render() {
    const { leftOffset, isRightScrollerShown } = this.state;
    const { productsIdToDisplay, updateProductId, listType, productId } = this.props;

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
            <div
              className={productList['carousel-wrapper']}
              ref={(ele) => { this.carouselWrapper = ele; }}
              style={{ left: leftOffset }}
            >
              { listType === 'YourProducts' ? <Card cardType="add" productId={productId} /> : null}
              {productsIdToDisplay.map((id) =>
                <Card key={id} id={id} updateProductId={updateProductId} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
