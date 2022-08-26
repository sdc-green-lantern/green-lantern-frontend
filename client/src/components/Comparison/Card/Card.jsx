import React from 'react';
import card from './Card.module.css';

// eslint-disable-next-line react/prefer-stateless-function
class Card extends React.Component {
  render() {
    return (
      <div className={card.container}>
        <img
          src="https://images.unsplash.com/photo-1661308354640-a48b818557ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
          alt="Grapefruit slice atop a pile of other slices"
        />
        <div>
          <div>Category...</div>
          <div>Name.......</div>
          <div>Price.......</div>
          <div>Average Rating.......</div>
        </div>
      </div>

    );
  }
}

export default Card;
