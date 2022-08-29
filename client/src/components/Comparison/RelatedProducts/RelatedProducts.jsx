import React from 'react';
// eslint-disable-next-line import/extensions
import Card from '../Card/Card.jsx';
import relatedProducts from './RelatedProducts.module.css';

// eslint-disable-next-line react/prefer-stateless-function
class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftOffset: 0,
      products: [1, 2, 3, 4, 5, 6, 6, 7],
    };
    this.handleScroll = RelatedProducts.handleScroll.bind(this);
  }

  static handleScroll(isRight) {
    return () => {
      const { leftOffset } = this.state;
      const unitOffset = isRight ? -200 : 200;
      this.setState({
        leftOffset: leftOffset + unitOffset,
      });
    };
  }

  render() {
    const { leftOffset } = this.state;
    return (
      <div className="related-products">
        <div data-testid="title" className={relatedProducts.title}>
          RELATED PRODUCTS
        </div>
        <div className={relatedProducts.main}>
          <div
            className={relatedProducts.left}
            style={{ display: leftOffset === 0 ? 'none' : 'flex' }}
          >
            <div
              className={relatedProducts['arrow-left']}
            />
            <button type="button" onClick={this.handleScroll(false)} />
          </div>
          <div
            className={relatedProducts.right}
            style={{ display: leftOffset === 800 ? 'none' : 'flex' }}
          >
            <div
              className={relatedProducts['arrow-right']}
            />
            <button type="button" onClick={this.handleScroll(true)} />
          </div>
          <div className={relatedProducts.carousel}>
            <div
              className={relatedProducts['carousel-wrapper']}
              style={{ left: leftOffset }}
            >
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RelatedProducts;
