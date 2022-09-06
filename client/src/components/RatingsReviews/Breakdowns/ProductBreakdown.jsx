import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegStar, faCircleXmark } from '@fortawesome/free-regular-svg-icons';

import ProductBreakdownCSS from './ProductBreakdown.module.css';

export default class ProductBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characteristics: {},
    };
  }

  render() {
    const { characteristics } = this.props;
    console.log("Characteristics:");
    console.log(characteristics);
    let characteristicsRows = [];
    if (characteristics !== undefined && Object.keys(characteristics).length > 0) {
      const characteristicNames = Object.keys(characteristics);
      console.log(characteristicNames);

      characteristicsRows = characteristicNames.map((name) => {
        const { id, value } = characteristics[name];
        console.log(id, value);
        return (
          <div>
            {name}
            id: {id},
            value: {value}
          </div>
        );
      });
    }

    return (
      <div
        className={ProductBreakdownCSS.breakdown_container}
      >
        Product Breakdown
        {characteristicsRows}
      </div>
    );
  }
}
