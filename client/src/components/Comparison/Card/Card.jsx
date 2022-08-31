import React from 'react';
import card from './Card.module.css';
import instance from '../../../../../axiosConfig.js';

const cate = ['computer', 'tv', 'ipad', 'bike', 'monitor', 'chair', 'table', 'watch', 'jean', 'motor', 'ship', 'bag'];
// eslint-disable-next-line react/prefer-stateless-function
class Card extends React.Component {
  static averageRating(ratings) {
    if (!ratings) {
      return null;
    }
    const total = Object.entries(ratings).reduce((prev, [key, value]) => (prev + key * value), 0);
    const count = Object.entries(ratings).reduce((prev, [_, value]) => (prev + value * 1), 0);
    return (total / count).toFixed(2);
  }

  constructor(props) {
    super(props);
    this.state = {
      info: {},
      styles: [],
      defaultStyle: {},
      reviewMeta: {},
    };
    this.updateProduct = this.updateProduct.bind(this);
  }

  componentDidMount() {
    this.updateProduct();
  }

  async updateProduct() {
    const { id } = this.props;
    const infoResponse = await instance.get(`/products/${id}`);
    const styleResponse = await instance.get(`/products/${id}/styles`);
    const reviewResponse = await instance.get('/reviews/meta', { params: { product_id: id } });

    const { data: infoData } = infoResponse;
    const { data: { results: styleData } } = styleResponse;
    const { data: reviewData } = reviewResponse;

    const defaultStyle = styleData.filter((style) => style['default?'])[0] || styleData[0];

    this.setState({
      info: infoData,
      styles: styleData,
      defaultStyle: defaultStyle,
      reviewMeta: reviewData,
    });
  }

  render() {
    const { info, reviewMeta, defaultStyle } = this.state;
    const { name, category } = info;
    const { original_price: originalPrice, sale_price: salePrice, photos } = defaultStyle;
    const { ratings } = reviewMeta;

    const averageRating = Card.averageRating(ratings);
    return (
      <div className={card.container}>
        <div className={card['img-container']}>
          <img
            src={photos ? photos[0].url : ''}
            alt="Grapefruit slice atop a pile of other slices"
            style={{ display: photos ? 'block' : 'none' }}
          />
        </div>
        <div className={card.info}>
          <div>{category}</div>
          <div>{name}</div>
          <div>
            <span style={{ display: salePrice ? 'inline' : 'none' }}>{`sale price: $ ${salePrice}`}</span>
            <span style={{ display: originalPrice ? 'inline' : 'none' }}>{`$ ${originalPrice}`}</span>
          </div>
          <div>{averageRating}</div>
        </div>
      </div>

    );
  }
}

export default Card;
