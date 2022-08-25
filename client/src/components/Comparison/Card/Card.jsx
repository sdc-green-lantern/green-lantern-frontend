import React from 'react';
import card from './Card.module.css';

class Card extends React.Component {
  render() {
    return (
      <div>
        <div className={card.header}>
          Hello Card
        </div>
      </div>

    );
  }
}

export default Card;
