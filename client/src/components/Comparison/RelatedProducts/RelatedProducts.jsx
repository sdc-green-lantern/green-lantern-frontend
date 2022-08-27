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
    return (e) => {
      const { leftOffset } = this.state;
      const cardWidth = this.refs.card;
      console.log(cardWidth);
      const unitOffset = isRight ? cardWidth : -cardWidth;
      this.setState({
        leftOffset: leftOffset + unitOffset,
      });
    };
  }

  render() {
    const { currCardIndex, products } = this.state;
    return (
      <div className="related-products">
        <div className={relatedProducts.title}>
          RELATED PRODUCTS
        </div>
        <div className={relatedProducts.main}>
          <div className={relatedProducts.left}>
            <div
              className={relatedProducts['arrow-left']}
              style={{ display: currCardIndex === 0 ? 'none' : 'inline-block' }}
            />
            <button type="button" onClick={this.handleScroll(false)} />
          </div>
          <div className={relatedProducts.right}>
            <div
              className={relatedProducts['arrow-right']}
              style={{ display: currCardIndex === products.length ? 'none' : 'inline-block' }}
            />
            <button type="button" onClick={this.handleScroll(true)} />
          </div>
          <div className={relatedProducts.carousel}>
            <div className={relatedProducts['carousel-wrapper']}>
              <Card ref='card'/>
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
