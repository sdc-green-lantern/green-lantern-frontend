import React from 'react';
import card from './Card.module.css';
import instance from '../../../../../axiosConfig.js';

const cate = ['computer', 'tv', 'ipad', 'bike', 'monitor', 'chair', 'table', 'watch', 'jean', 'motor', 'ship', 'bag'];
// eslint-disable-next-line react/prefer-stateless-function
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    };
    this.updateProduct = this.updateProduct.bind(this);
  }

  componentDidMount() {
    this.updateProduct();
  }

  async updateProduct() {
    const { id } = this.props;
    const response = await instance.get(`/products/${id}`);
    const { data } = response;
    console.log(data);
    this.setState({
      product: data,
    });
  }

  render() {
    const { id, name, category, default_price: defaultPrice, } = this.state.product;
    return (
      <div className={card.container}>
        <div className={card['img-container']}>
          <img
            src={`https://source.unsplash.com/random/?${cate[Math.floor(Math.random() * cate.length)]}`}
            alt="Grapefruit slice atop a pile of other slices"
          />
        </div>
        <div>
          <div>{category}</div>
          <div>{name}</div>
          <div>${defaultPrice}</div>
          <div>Average Rating.......</div>
        </div>
      </div>

    );
  }
}

export default Card;
