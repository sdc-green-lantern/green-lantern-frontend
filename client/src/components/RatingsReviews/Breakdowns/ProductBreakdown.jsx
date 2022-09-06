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
    const { characteristics, featureRatings } = this.props;
    console.log("Characteristics:");
    console.log(characteristics);
    let characteristicsRows = [];
    if ((characteristics !== undefined && Object.keys(characteristics).length > 0)
      && (featureRatings !== undefined && Object.keys(featureRatings).length > 0)) {
      const characteristicNames = Object.keys(characteristics);
      console.log(characteristics);
      console.log(characteristicNames);
      console.log(featureRatings);

      characteristicsRows = characteristicNames.map((name) => {
        const { id, value } = characteristics[name];
        const { descriptions } = featureRatings[name];
        // console.log(descriptions);
        // console.log(name, id, value, descriptions);
        return (
          <div
            className={ProductBreakdownCSS.characteristic_container}
            key={id}
          >
            <div>{name}</div>
            <div>{id}</div>
            <div>{value}</div>
            {/* descriptions: {descriptions} */}
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
