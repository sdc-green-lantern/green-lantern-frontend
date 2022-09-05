import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import stars from './Stars.module.css';

export default function Stars(props) {
  const { averageRating } = props;
  return (
    <div className={stars.rating}>
      <div className={stars['rating-overlay']} style={{ width: `${averageRating * 20}%` }} />
      <FontAwesomeIcon icon={faStar} size="lg" className={stars.star} />
      <FontAwesomeIcon icon={faStar} size="lg" className={stars.star} />
      <FontAwesomeIcon icon={faStar} size="lg" className={stars.star} />
      <FontAwesomeIcon icon={faStar} size="lg" className={stars.star} />
      <FontAwesomeIcon icon={faStar} size="lg" className={stars.star} />
    </div>
  );
}
