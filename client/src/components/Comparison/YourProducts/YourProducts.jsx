import React from 'react';
import Card from '../Card/Card.jsx';
import yourProducts from './YourProducts.module.css';


class YourProducts extends React.Component {
  render() {
    return (
      <div className={yourProducts['your-products']}>
        <div>
          RELATED PRODUCTS
        </div>
        <div className={yourProducts.main}>
          <div className={yourProducts['card-container']}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    )
  }
}

export default YourProducts