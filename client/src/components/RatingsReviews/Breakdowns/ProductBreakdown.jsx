import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegStar, faCircleXmark } from '@fortawesome/free-regular-svg-icons';

import ProductBreakdownCSS from './ProductBreakdown.module.css';

export default class ProductBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>Product Breakdown</div>
    );
  }
}
